"""Generate one static page per publication, plus robots.txt, sitemap.xml and llms.txt.

Run from the repo root after editing publications.bib:

    python scripts/build_pubs.py

Outputs go to public/pubs/, public/robots.txt, public/sitemap.xml and public/llms.txt.
Each page carries the citation, a BibTeX entry, Google Scholar "citation_*" meta tags
and schema.org JSON-LD, so search engines and research assistants can read and quote it.
Abstracts are not invented: a page shows a summary only where one is listed in SUMMARIES.
"""
import datetime
import html
import io
import json
import os
import re

SITE = 'https://vishnu.kadiyala.net'
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BIB = os.path.join(ROOT, 'publications.bib')
OUT = os.path.join(ROOT, 'public', 'pubs')

# Entries to publish, in display order. Anything not listed here is skipped.
ORDER = [
    'kadiyala2026teammate',
    'sasser2025visibility',
    'spicer2024houston',
    'spicer2023em27',
    'kadiyala2022localization',
    'kadiyala2018wireless',
    'kadiyala2018plant',
]

# One or two plain sentences per paper, written by the author. Leave a key out to show none.
SUMMARIES = {
    'kadiyala2026teammate':
        'Cooperative agents are often trained to predict their teammates as an auxiliary task. '
        'This paper shows that an agent needing information about its partner does not imply that it '
        'benefits from being trained to predict the partner, and it identifies when such training helps.',
    'sasser2025visibility':
        'Camera-based estimation of atmospheric visibility, which extends coverage statewide beyond '
        'the sparse sensors at airports.',
}

STATUS = {
    'kadiyala2026teammate': 'Under review at ICLR 2027. The abstract and PDF will be added when a public version is posted.',
}


def parse_bib(text):
    entries = {}
    for m in re.finditer(r'@(\w+)\{([^,]+),(.*?)\n\}', text, flags=re.S):
        kind, key, body = m.group(1).lower(), m.group(2).strip(), m.group(3)
        fields = {}
        for line in body.split('\n'):
            line = line.split('%')[0] if line.strip().startswith('%') else line
            fm = re.match(r'\s*(\w+)\s*=\s*(.+?),?\s*$', line)
            if fm:
                val = fm.group(2).strip()
                while (val.startswith('{') and val.endswith('}')) or (val.startswith('"') and val.endswith('"')):
                    inner = val[1:-1]
                    if inner.count('{') != inner.count('}'):
                        break
                    val = inner
                fields[fm.group(1).lower()] = val
        raw_lines = [ln for ln in m.group(0).split('\n') if not ln.strip().startswith('%')]
        entries[key] = {'kind': kind, 'key': key, 'fields': fields, 'raw': '\n'.join(raw_lines)}
    return entries


def clean(s):
    return s.replace('{', '').replace('}', '').strip()


def authors(field):
    names, et_al = [], False
    for a in re.split(r'\s+and\s+', field):
        a = clean(a)
        if a.lower() == 'others':
            et_al = True
            continue
        if ',' in a:
            last, first = [p.strip() for p in a.split(',', 1)]
            a = first + ' ' + last
        names.append(a)
    return names, et_al


def venue(e):
    f = e['fields']
    if e['kind'] == 'mastersthesis':
        return "Master's thesis, " + clean(f.get('school', ''))
    if 'booktitle' in f:
        return clean(f['booktitle'])
    return clean(f.get('note', ''))


CSS = """
:root{--bg:#fbf8f1;--surface:#f3ecdf;--text:#20190f;--muted:#6f6453;--rule:#e2d8c4;--accent:#9c2f23}
@media (prefers-color-scheme: dark){:root{--bg:#16130f;--surface:#1f1b15;--text:#f1e9da;--muted:#b3a890;--rule:#322b20;--accent:#e0795f}}
*{box-sizing:border-box;margin:0;padding:0}
body{background:var(--bg);color:var(--text);font-family:'Crimson Pro',Georgia,serif;font-size:1.15rem;line-height:1.65}
main{max-width:46rem;margin:0 auto;padding:56px 24px 80px}
a{color:var(--accent)}
.kicker{font-family:'Public Sans',system-ui,sans-serif;font-size:.72rem;font-weight:600;letter-spacing:.16em;text-transform:uppercase;color:var(--accent);margin-bottom:18px}
h1{font-family:'Libre Bodoni',Georgia,serif;font-weight:600;font-size:clamp(1.7rem,4.5vw,2.5rem);line-height:1.15;margin-bottom:20px}
h2{font-family:'Public Sans',system-ui,sans-serif;font-size:.72rem;font-weight:600;letter-spacing:.16em;text-transform:uppercase;color:var(--muted);margin:36px 0 10px}
.authors{color:var(--muted);margin-bottom:8px}
.venue{font-style:italic;margin-bottom:8px}
pre{background:var(--surface);border:1px solid var(--rule);border-radius:3px;padding:16px 18px;overflow-x:auto;font-family:ui-monospace,Consolas,monospace;font-size:.8rem;line-height:1.5;white-space:pre-wrap;word-break:break-word}
ul{list-style:none}
li{padding:14px 0;border-bottom:1px solid var(--rule)}
li a{font-weight:600;text-decoration:none}
li a:hover{text-decoration:underline}
.small{font-size:.98rem;color:var(--muted)}
nav{font-family:'Public Sans',system-ui,sans-serif;font-size:.74rem;font-weight:600;letter-spacing:.12em;text-transform:uppercase;margin-bottom:40px}
nav a{text-decoration:none;margin-right:22px}
"""

FONTS = ('<link rel="preconnect" href="https://fonts.googleapis.com">'
         '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>'
         '<link href="https://fonts.googleapis.com/css2?family=Libre+Bodoni:wght@500;600&family=Crimson+Pro:ital,wght@0,400;0,600;1,400&family=Public+Sans:wght@500;600&display=swap" rel="stylesheet">')


def page(title, description, head_extra, body):
    return ('<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n'
            '<meta name="viewport" content="width=device-width, initial-scale=1">\n'
            '<title>' + html.escape(title) + '</title>\n'
            '<meta name="description" content="' + html.escape(description, quote=True) + '">\n'
            '<link rel="icon" href="/favicon.svg">\n' + FONTS + '\n' + head_extra +
            '<style>' + CSS + '</style>\n</head>\n<body>\n<main>\n'
            '<nav><a href="/">Vishnu Kadiyala</a><a href="/pubs/">All publications</a><a href="/cv.pdf">CV</a></nav>\n'
            + body + '\n</main>\n</body>\n</html>\n')


def build():
    entries = parse_bib(io.open(BIB, encoding='utf-8').read())
    os.makedirs(OUT, exist_ok=True)
    urls, index_items, llms_items = [], [], []

    for key in ORDER:
        e = entries[key]
        f = e['fields']
        title = clean(f['title'])
        names, et_al = authors(f['author'])
        year = f.get('year', '')
        ven = venue(e)
        url = SITE + '/pubs/' + key + '.html'
        ads = f.get('adsurl') or f.get('url')
        author_line = ', '.join(names) + (', et al.' if et_al else '')
        yr = ', ' + year if year and year not in ven and e['kind'] != 'unpublished' else ''

        meta = ['<link rel="canonical" href="' + url + '">',
                '<meta name="citation_title" content="' + html.escape(title, quote=True) + '">']
        meta += ['<meta name="citation_author" content="' + html.escape(n, quote=True) + '">' for n in names]
        meta.append('<meta name="citation_publication_date" content="' + year + '">')
        if e['kind'] == 'inproceedings':
            meta.append('<meta name="citation_conference_title" content="' + html.escape(ven, quote=True) + '">')
        if e['kind'] == 'mastersthesis':
            meta.append('<meta name="citation_dissertation_institution" content="' + html.escape(clean(f.get('school', '')), quote=True) + '">')
        meta.append('<meta name="citation_abstract_html_url" content="' + url + '">')

        ld = {
            '@context': 'https://schema.org',
            '@type': 'Thesis' if e['kind'] == 'mastersthesis' else 'ScholarlyArticle',
            'name': title,
            'headline': title,
            'author': [{'@type': 'Person', 'name': n} for n in names],
            'datePublished': year,
            'url': url,
        }
        if e['kind'] == 'inproceedings':
            ld['isPartOf'] = {'@type': 'PublicationEvent', 'name': ven}
        if e['kind'] == 'mastersthesis':
            ld['inSupportOf'] = "Master's degree"
            ld['sourceOrganization'] = {'@type': 'CollegeOrUniversity', 'name': clean(f.get('school', ''))}
        if ads:
            ld['sameAs'] = ads
        if key in SUMMARIES:
            ld['description'] = SUMMARIES[key]
        head_extra = '\n'.join(meta) + '\n<script type="application/ld+json">' + json.dumps(ld, ensure_ascii=False) + '</script>\n'

        body = ['<p class="kicker">Publication</p>',
                '<h1>' + html.escape(title) + '</h1>',
                '<p class="authors">' + html.escape(author_line) + '</p>',
                '<p class="venue">' + html.escape(ven) + yr + '</p>']
        if key in STATUS:
            body[-1] = '<p class="venue">' + html.escape(STATUS[key]) + '</p>'
        if key in SUMMARIES:
            body.append('<h2>Summary</h2>\n<p>' + html.escape(SUMMARIES[key]) + '</p>')
        if ads:
            body.append('<h2>Record</h2>\n<p><a href="' + html.escape(ads, quote=True) + '" rel="noopener">NASA ADS entry</a></p>')
        body.append('<h2>Cite</h2>\n<pre>' + html.escape(e['raw']) + '</pre>')

        desc = SUMMARIES.get(key, title + '. ' + author_line + '. ' + ven + '.')
        io.open(os.path.join(OUT, key + '.html'), 'w', encoding='utf-8', newline='\n').write(
            page(title + ' | Vishnu Kadiyala', desc, head_extra, '\n'.join(body)))

        urls.append(url)
        index_items.append('<li><a href="/pubs/' + key + '.html">' + html.escape(title) + '</a><br>'
                           '<span class="small">' + html.escape(author_line) + '. ' + html.escape(ven)
                           + yr + '.</span></li>')
        llms_items.append('- [' + title + '](' + url + '): ' + ven + yr
                          + '.' + (' ' + SUMMARIES[key] if key in SUMMARIES else ''))

    index_body = ('<p class="kicker">Publications</p>\n<h1>Publications of Vishnu Kadiyala</h1>\n'
                  '<p class="small">Each entry links to a page with the full citation and a BibTeX entry.</p>\n'
                  '<ul>\n' + '\n'.join(index_items) + '\n</ul>')
    io.open(os.path.join(OUT, 'index.html'), 'w', encoding='utf-8', newline='\n').write(
        page('Publications | Vishnu Kadiyala',
             'Publications of Vishnu Kadiyala, with citations and BibTeX entries.',
             '<link rel="canonical" href="' + SITE + '/pubs/">\n', index_body))

    public = os.path.join(ROOT, 'public')
    today = datetime.date.today().isoformat()
    all_urls = [SITE + '/', SITE + '/pubs/', SITE + '/walkthrough/coordination.html'] + urls
    sitemap = ('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
               + ''.join('  <url><loc>' + u + '</loc><lastmod>' + today + '</lastmod></url>\n' for u in all_urls)
               + '</urlset>\n')
    io.open(os.path.join(public, 'sitemap.xml'), 'w', encoding='utf-8', newline='\n').write(sitemap)

    io.open(os.path.join(public, 'robots.txt'), 'w', encoding='utf-8', newline='\n').write(
        '# All crawlers, including AI research assistants, may read this site.\n'
        'User-agent: *\nAllow: /\n\nSitemap: ' + SITE + '/sitemap.xml\n')

    llms = ('# Vishnu Kadiyala\n\n'
            '> PhD candidate in Computer Science at the University of Oklahoma (advisor: Dr. Mohammed Atiquzzaman), '
            'graduating May 2027. Research: how agents work out when, and with whom, they need to coordinate, '
            'using multi-agent learning under partial observability with autonomous driving as the application.\n\n'
            '## Research\n\n'
            '- Measuring the need to coordinate: testing coordination measures on small games where the answer can be '
            'derived by hand, and separating whether an agent\'s best action depends on its partner\'s action from how '
            'much the agent gains by observing its partner.\n'
            '- Learning whom to attend to: a transformer trained on procedurally generated multi-agent worlds that works '
            'out, from a small budget of what-if trials, which other agents its outcome depends on.\n'
            '- When predicting teammates helps: needing information about a partner does not imply benefiting from '
            'being trained to predict that partner.\n'
            '- Coordination in driving: measuring which road users change a planner\'s decision on NAVSIM and the Waymo '
            'Open Motion Dataset, and when a connected vehicle should communicate its intent.\n\n'
            '## Pages\n\n'
            '- [Home](' + SITE + '/): research, projects, experience and contact.\n'
            '- [Coordination model walkthrough](' + SITE + '/walkthrough/coordination.html): animated explanation of '
            'learning whom to attend to and how to act without coordination.\n'
            '- [Publications](' + SITE + '/pubs/): one page per paper with citation and BibTeX.\n'
            '- [CV](' + SITE + '/cv.pdf)\n\n'
            '## Publications\n\n' + '\n'.join(llms_items) + '\n\n'
            '## How to cite\n\n'
            'Each publication page has a BibTeX entry. Please cite the specific paper, not this website.\n')
    io.open(os.path.join(public, 'llms.txt'), 'w', encoding='utf-8', newline='\n').write(llms)
    print('wrote', len(ORDER), 'publication pages, index, sitemap.xml, robots.txt, llms.txt')


if __name__ == '__main__':
    build()
