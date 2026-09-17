import { AdvancedMenu, MENU } from '@unisim/sdk'
// Generated — `npm run credits` after any dependency change. Never edit it by
// hand: it is read off the installed tree, so a hand-kept list drifts from the
// lockfile the first time anyone upgrades anything, and a credits list naming a
// package we removed is worse than no list at all.
import credits from '../../generated/credits.json'
import { useChartStore } from '../../stores/chartStore'
import { useThemeStore } from '../../stores/themeStore'
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
//
// ⚠️ Inline styles can't answer the `.dark` class, and the SDK does NOT theme
// the host's `actions` rows — so every colour here comes from `ROW[theme]`.
// The light column is exactly what these rows always rendered; the dark column
// is the SDK's own `MENU.dark` palette, so the rows match the panel around them.
//
// The Appearance rows (Light / Dark / Match my device) that used to sit here
// are gone since SDK 0.143: colour scheme is now a Global preference, and this
// app's override of it lives in the SDK's App preferences dialog, offered
// because App.tsx passes `themeStore` to the navbar. Don't add them back — two
// controls for one setting, one of them unable to say "follow global".

export default function AppMenu() {
  const loadSample = useChartStore((s) => s.loadSample)
  const theme = useThemeStore((s) => s.effective)
  const pal = ROW[theme]

  return (
    <>
      {SAMPLES.map((s) => (
        <MenuRow key={s.id} pal={pal} glyph="📊" label={s.label} onClick={() => loadSample(s.id)} />
      ))}

      {/* Advanced — the SDK's own category, so every app in the suite has one in
          the same place, and whatever goes in it next is one change rather than
          nineteen. "About this app" is always its last row. ⚠️ `theme` is
          required here: the section is inline-styled and would otherwise render
          as a pale strip in a dark dropdown. */}
      <AdvancedMenu
        theme={theme}
        about={{
          repo:    'https://github.com/universal-simulation-ltd/Universal_Charts',
          subject: 'Your data',
          plural:  true,
          headline: 'Other chart tools upload your spreadsheet to draw it on their servers.',
          version: __APP_VERSION__,
          credits,
          noticesHref: 'https://github.com/universal-simulation-ltd/Universal_Charts/blob/main/THIRD-PARTY-NOTICES.md',
        }}
      />
    </>
  )
}

interface RowPalette {
  rest: string
  hoverBg: string
  hoverFg: string
}

const TINT = { bg: '#fff7ed', fg: '#c2410c' }
const REST_COLOR = '#374151'

const ROW: Record<'light' | 'dark', RowPalette> = {
  light: {
    rest: REST_COLOR,
    hoverBg: TINT.bg,
    hoverFg: TINT.fg,
  },
  dark: {
    rest: MENU.dark.body,
    hoverBg: MENU.dark.rowHover,
    hoverFg: MENU.dark.rowHoverText,
  },
}

function MenuRow({
  pal,
  glyph,
  label,
  onClick,
}: {
  pal: RowPalette
  glyph: string
  label: string
  onClick: () => void
}) {
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
        color:      pal.rest,
        cursor:     'pointer',
        transition: 'background 120ms, color 120ms',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = pal.hoverBg
        e.currentTarget.style.color = pal.hoverFg
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'transparent'
        e.currentTarget.style.color = pal.rest
      }}
    >
      <span aria-hidden>{glyph}</span>
      <span style={{ flex: 1, minWidth: 0, fontWeight: 500, lineHeight: 1.3 }}>{label}</span>
    </button>
  )
}
