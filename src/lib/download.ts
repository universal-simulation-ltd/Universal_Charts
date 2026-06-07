import { toPng, toBlob } from 'html-to-image'

// Export helpers. PNG/clipboard go through html-to-image (rasterises the live
// DOM, recharts SVG and all); SVG is serialised straight from the chart's
// <svg> node for a crisp, scalable vector.

function triggerDownload(href: string, filename: string) {
  const a = document.createElement('a')
  a.href = href
  a.download = filename
  document.body.appendChild(a)
  a.click()
  a.remove()
}

export async function downloadPng(node: HTMLElement, scale: number, filename: string): Promise<void> {
  const dataUrl = await toPng(node, { pixelRatio: scale, backgroundColor: '#ffffff', cacheBust: true })
  triggerDownload(dataUrl, filename)
}

export function downloadSvg(node: HTMLElement, filename: string): void {
  const svg = node.querySelector('svg')
  if (!svg) throw new Error('No chart to export')
  const clone = svg.cloneNode(true) as SVGSVGElement
  clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
  // Paint a white background rect behind the chart so the SVG isn't transparent.
  const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
  rect.setAttribute('width', '100%')
  rect.setAttribute('height', '100%')
  rect.setAttribute('fill', '#ffffff')
  clone.insertBefore(rect, clone.firstChild)
  const xml = new XMLSerializer().serializeToString(clone)
  const blob = new Blob([xml], { type: 'image/svg+xml;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  triggerDownload(url, filename)
  URL.revokeObjectURL(url)
}

export async function copyPng(node: HTMLElement): Promise<boolean> {
  const blob = await toBlob(node, { pixelRatio: 2, backgroundColor: '#ffffff', cacheBust: true })
  if (!blob) return false
  const clip = navigator.clipboard as Clipboard & { write?: (items: ClipboardItem[]) => Promise<void> }
  if (!clip?.write || typeof ClipboardItem === 'undefined') return false
  await clip.write([new ClipboardItem({ 'image/png': blob })])
  return true
}
