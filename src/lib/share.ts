import { compressToEncodedURIComponent, decompressFromEncodedURIComponent } from 'lz-string'
import type { SharePayload } from './types'
import { sanitizeShare } from './sharePayload'

// The chart config + data are LZ-compressed into the URL FRAGMENT (`#d=…`), so
// a shared link reconstructs the chart entirely client-side — no server, no
// upload. The fragment matters: browsers never send it in the HTTP request, so
// opening a link doesn't hand the data to whoever serves the page either (the
// query string would — it lands in server and CDN logs).
//
// ⚠️ Links made before 2026-09-28 carried it in the QUERY (`?d=…`). Those are
// still read, and `adoptLegacyShareUrl` moves them into the fragment on load so
// the data leaves the address bar's query (and a copied/bookmarked URL) at once.
// The first request for an old link has already sent it, which nothing on this
// side can undo.
const PARAM = 'd'

export function encodeShare(payload: SharePayload): string {
  return compressToEncodedURIComponent(JSON.stringify(payload))
}

export function decodeShare(encoded: string): SharePayload | null {
  try {
    // decompressFromEncodedURIComponent maps ' ' back to '+', so a value that
    // went through URLSearchParams (which reads '+' as a space) still decodes.
    const json = decompressFromEncodedURIComponent(encoded)
    if (!json) return null
    // Somebody else's JSON: keep what a real link carries, drop the rest.
    return sanitizeShare(JSON.parse(json))
  } catch {
    return null
  }
}

function fragmentParams(hash: string): URLSearchParams {
  return new URLSearchParams(hash.startsWith('#') ? hash.slice(1) : hash)
}

/**
 * Put `d=<value>` in the fragment, keeping any other fragment params. The value
 * is written RAW: lz-string's URI alphabet is already URL-safe, and letting
 * URLSearchParams serialise it would turn every '+' and '$' into three
 * characters and make an already-long link longer for nothing.
 */
function withFragmentD(url: URL, value: string): void {
  const rest = fragmentParams(url.hash)
  rest.delete(PARAM)
  const others = rest.toString()
  url.hash = `${PARAM}=${value}${others ? `&${others}` : ''}`
}

/** The shared chart in the current URL — fragment first, then a legacy `?d=`. */
export function readShareFromUrl(): SharePayload | null {
  const d =
    fragmentParams(window.location.hash).get(PARAM) ??
    new URLSearchParams(window.location.search).get(PARAM)
  return d ? decodeShare(d) : null
}

/**
 * Rewrite a legacy `?d=…` link into the `#d=…` form in place (no reload, no
 * history entry). No-op when there is no query `d`, or when a fragment `d`
 * is already present (the fragment wins; the stale query copy is dropped).
 */
export function adoptLegacyShareUrl(): void {
  const url = new URL(window.location.href)
  const legacy = url.searchParams.get(PARAM)
  if (legacy === null) return
  url.searchParams.delete(PARAM)
  if (!fragmentParams(url.hash).has(PARAM)) withFragmentD(url, legacy.replace(/ /g, '+'))
  try {
    window.history.replaceState(window.history.state, '', url.toString())
  } catch {
    /* sandboxed frame: the chart still loaded; only the address bar is stale */
  }
}

export function buildShareUrl(payload: SharePayload): string {
  const url = new URL(window.location.href)
  // Never leave a legacy query copy beside the new fragment — it would be the
  // old chart, and it is the half the server sees.
  url.searchParams.delete(PARAM)
  withFragmentD(url, encodeShare(payload))
  return url.toString()
}
