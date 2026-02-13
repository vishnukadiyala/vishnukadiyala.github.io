import { useMemo } from 'react'
import roles from './data/roles.js'

export default function useRole() {
  return useMemo(() => {
    const params = new URLSearchParams(window.location.search)
    const key = params.get('role')
    if (key && roles[key]) {
      return { key, ...roles[key] }
    }
    return null
  }, [])
}
