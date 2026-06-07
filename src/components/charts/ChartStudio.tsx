import { useRef, useState } from 'react'
import { useChartStore } from '../../stores/chartStore'
import ChartView from './ChartView'
import ChartControls from './ChartControls'
import DataPanel from './DataPanel'
import { downloadPng, downloadSvg, copyPng } from '../../lib/download'
import { buildShareUrl } from '../../lib/share'

export default function ChartStudio() {
  const config = useChartStore((s) => s.config)
  const rows = useChartStore((s) => s.rows)
  const payload = useChartStore((s) => s.payload)

  const chartRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(2)
  const [msg, setMsg] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)

  const flash = (m: string) => {
    setMsg(m)
    window.setTimeout(() => setMsg(null), 2200)
  }

  const safeName = (config.title || 'chart').replace(/[^a-z0-9]+/gi, '-').replace(/^-+|-+$/g, '') || 'chart'

  const onPng = async () => {
    if (!chartRef.current) return
    setBusy(true)
    try {
      await downloadPng(chartRef.current, scale, `${safeName}.png`)
    } catch {
      flash('PNG export failed')
    } finally {
      setBusy(false)
    }
  }

  const onSvg = () => {
    if (!chartRef.current) return
    try {
      downloadSvg(chartRef.current, `${safeName}.svg`)
    } catch {
      flash('SVG export failed')
    }
  }

  const onCopy = async () => {
    if (!chartRef.current) return
    setBusy(true)
    try {
      const ok = await copyPng(chartRef.current)
      flash(ok ? 'Copied to clipboard' : 'Clipboard not supported here')
    } catch {
      flash('Copy failed')
    } finally {
      setBusy(false)
    }
  }

  const onShare = async () => {
    const url = buildShareUrl(payload())
    try {
      await navigator.clipboard.writeText(url)
      flash('Share link copied')
    } catch {
      flash('Copy the link from the address bar')
      window.history.replaceState(null, '', url)
    }
  }

  return (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-6">
      <div className="grid gap-6 lg:grid-cols-[360px_minmax(0,1fr)]">
        {/* Left: data + controls */}
        <div className="space-y-4 lg:max-h-[calc(100vh-160px)] lg:overflow-y-auto lg:pr-1">
          <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <DataPanel />
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <ChartControls />
          </section>
        </div>

        {/* Right: chart + export */}
        <div className="space-y-4">
          <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <div className="mr-auto flex items-center gap-2 text-sm text-slate-500">
                <span className="font-medium text-slate-700">Export</span>
                <div className="flex overflow-hidden rounded-md ring-1 ring-slate-200">
                  {[1, 2, 3].map((s) => (
                    <button
                      key={s}
                      onClick={() => setScale(s)}
                      className={`px-2 py-1 text-xs font-medium ${scale === s ? 'bg-slate-800 text-white' : 'bg-white text-slate-600 hover:bg-slate-50'}`}
                    >
                      {s}×
                    </button>
                  ))}
                </div>
              </div>
              <button onClick={onPng} disabled={busy} className="rounded-md bg-orange-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-orange-700 disabled:opacity-50">PNG</button>
              <button onClick={onSvg} className="rounded-md bg-white px-3 py-1.5 text-sm font-medium text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50">SVG</button>
              <button onClick={onCopy} disabled={busy} className="rounded-md bg-white px-3 py-1.5 text-sm font-medium text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50 disabled:opacity-50">Copy</button>
              <button onClick={onShare} className="rounded-md bg-white px-3 py-1.5 text-sm font-medium text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50">Share link</button>
            </div>

            {/* Exported region: title + chart on white. */}
            <div ref={chartRef} className="rounded-lg bg-white p-4">
              {config.title && <h2 className="mb-2 text-center text-base font-semibold text-slate-800">{config.title}</h2>}
              <ChartView config={config} rows={rows} />
            </div>

            {msg && <p className="mt-2 text-center text-sm text-emerald-600">{msg}</p>}
          </section>

          <p className="text-center text-xs text-slate-400">
            Share links encode the chart + data into the URL — no server, nothing stored.
          </p>
        </div>
      </div>
    </div>
  )
}
