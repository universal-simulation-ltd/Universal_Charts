import { useEffect, useRef, useState } from 'react'
import { useChartStore } from '../../stores/chartStore'
import { SAMPLES } from '../../lib/samples'

// The per-app "Data" dropdown that slots into <UniversalAppsNavBar /> — quick
// access to the sample datasets.
export default function AppMenu() {
  const loadSample = useChartStore((s) => s.loadSample)
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    function onDoc(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onDoc)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDoc)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="true"
        aria-expanded={open}
        className="h-8 px-3 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium ring-1 ring-slate-200 flex items-center gap-1.5"
      >
        Sample data
        <svg viewBox="0 0 12 12" className={`w-3 h-3 transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden="true">
          <path d="M2 4 L6 8 L10 4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 mt-2 w-56 bg-white text-slate-900 rounded-lg shadow-xl border border-slate-200 z-50 overflow-hidden">
          {SAMPLES.map((s) => (
            <button
              key={s.id}
              onClick={() => {
                loadSample(s.id)
                setOpen(false)
              }}
              className="w-full flex items-center gap-2 px-3 py-2.5 hover:bg-orange-50 hover:text-orange-700 text-sm border-b border-slate-100 last:border-b-0"
            >
              <span aria-hidden="true">📊</span>
              <span className="flex-1 text-left font-medium">{s.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
