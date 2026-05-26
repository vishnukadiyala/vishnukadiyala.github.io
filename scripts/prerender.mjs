// Post-build prerender step.
// Boots a tiny static server on dist/, navigates Puppeteer to the root,
// captures the fully-rendered DOM, and writes it back to dist/index.html
// so crawlers / link previews / LLMs see real content instead of just
// the <div id="root"></div> shell.
//
// Run as part of `npm run build` (via the "build" script in package.json).

import { createServer } from 'node:http'
import { readFile, writeFile } from 'node:fs/promises'
import { extname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import puppeteer from 'puppeteer'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const DIST_DIR = resolve(__dirname, '..', 'dist')

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.pdf': 'application/pdf',
  '.json': 'application/json',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
}

const server = createServer(async (req, res) => {
  const urlPath = (req.url || '/').split('?')[0]
  const target = urlPath === '/' ? 'index.html' : urlPath.replace(/^\//, '')
  const filePath = join(DIST_DIR, target)
  try {
    const data = await readFile(filePath)
    res.writeHead(200, { 'Content-Type': MIME[extname(filePath)] || 'application/octet-stream' })
    res.end(data)
  } catch {
    // SPA fallback to index.html
    const data = await readFile(join(DIST_DIR, 'index.html'))
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
    res.end(data)
  }
})

await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve))
const port = server.address().port
console.log(`[prerender] static server on http://127.0.0.1:${port}`)

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
})

try {
  const page = await browser.newPage()
  await page.setViewport({ width: 1280, height: 800 })
  await page.goto(`http://127.0.0.1:${port}/`, { waitUntil: 'networkidle0', timeout: 30000 })

  // Reveal all IntersectionObserver-gated sections so static viewers
  // (crawlers, LLMs, JS-disabled users) see the content immediately.
  await page.evaluate(() => {
    document.querySelectorAll('.fade-in').forEach((el) => el.classList.add('visible'))
  })

  const html = await page.content()
  await writeFile(join(DIST_DIR, 'index.html'), html, 'utf-8')
  console.log(`[prerender] wrote ${html.length} bytes to dist/index.html`)
} finally {
  await browser.close()
  server.close()
}
