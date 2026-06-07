import { compressToEncodedURIComponent, decompressFromEncodedURIComponent } from 'lz-string'
import type { SharePayload } from './types'

// The chart config + data are LZ-compressed into a single URL query param, so a
// shared link reconstructs the chart entirely client-side — no server, no
// upload. Data never leaves the recipient's browser either.
const PARAM = 'd'

export function encodeShare(payload: SharePayload): string {
  return compressToEncodedURIComponent(JSON.stringify(payload))
}

export function decodeShare(encoded: string): SharePayload | null {
  try {
    const json = decompressFromEncodedURIComponent(encoded)
    if (!json) return null
    const parsed = JSON.parse(json) as Partial<SharePayload>
    if (!parsed.config || !Array.isArray(parsed.columns) || !Array.isArray(parsed.rows)) return null
    return parsed as SharePayload
  } catch {
    return null
  }
}

export function readShareFromUrl(): SharePayload | null {
  const d = new URLSearchParams(window.location.search).get(PARAM)
  return d ? decodeShare(d) : null
}

export function buildShareUrl(payload: SharePayload): string {
  const url = new URL(window.location.href)
  url.searchParams.set(PARAM, encodeShare(payload))
  return url.toString()
}
