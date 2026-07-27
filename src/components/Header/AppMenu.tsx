import { useChartStore } from '../../stores/chartStore'
import { SAMPLES } from '../../lib/samples'

// The per-app rows that slot into <UniversalAppsNavBar />'s `actions` prop —
// ROWS ONLY, no trigger and no panel of its own. The SDK renders them inside the
// merged profile pill, so the bar carries one dropdown on the right rather than
// a Sample-data button on the left and an avatar on the right. The pill keeps
// the old trigger's wording via `actionsLabel` — these rows are datasets, not
// actions, and "Sample data" is what someone is looking for.
//
// Styling is inline rather than Tailwind to match the SDK dropdown's own rows
// (the same 8px/14px rhythm and 13px label the profile and language rows use) —
// these render inside SDK chrome, not ours.
export default function AppMenu() {
  const loadSample = useChartStore((s) => s.loadSample)

  return (
    <>
      {SAMPLES.map((s) => (
        <MenuRow key={s.id} label={s.label} onClick={() => loadSample(s.id)} />
      ))}
    </>
  )
}

const TINT = { bg: '#fff7ed', fg: '#c2410c' }
const REST_COLOR = '#374151'

function MenuRow({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      role="menuitem"
      onClick={onClick}
      style={{
        display:    'flex',
        alignItems: 'center',
        gap:        10,
        width:      '100%',
        padding:    '8px 14px',
        fontSize:   13,
        fontFamily: 'inherit',
        textAlign:  'left',
        border:     0,
        background: 'transparent',
        color:      REST_COLOR,
        cursor:     'pointer',
        transition: 'background 120ms, color 120ms',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = TINT.bg
        e.currentTarget.style.color = TINT.fg
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'transparent'
        e.currentTarget.style.color = REST_COLOR
      }}
    >
      <span aria-hidden>📊</span>
      <span style={{ flex: 1, minWidth: 0, fontWeight: 500, lineHeight: 1.3 }}>{label}</span>
    </button>
  )
}
