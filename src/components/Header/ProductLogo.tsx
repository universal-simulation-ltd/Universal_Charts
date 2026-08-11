// GENERATED FILE — do not edit by hand.
// Source: backoffice/universal-platform/scripts/app-marks/marks.mjs
// Regenerate: node scripts/app-marks/build.mjs (from backoffice/universal-platform)
// Mark: Universal Charts — Three bars off a baseline.
// Hover: The bars grow off the baseline, left to right.
//
// Icon-only by design: the SDK's UniversalAppsNavBar renders the product name
// from its catalogue beside this slot, so a wordmark here would print it twice.

const CSS = `
  /* Resting states */
  .uam-charts-bar1 { transform: scaleY(0.18); transition: transform .45s cubic-bezier(0.16,1,0.3,1) 0s; transform-origin: bottom; transform-box: fill-box; }
  .uam-charts-bar2 { transform: scaleY(0.18); transition: transform .45s cubic-bezier(0.16,1,0.3,1) .07s; transform-origin: bottom; transform-box: fill-box; }
  .uam-charts-bar3 { transform: scaleY(0.18); transition: transform .45s cubic-bezier(0.16,1,0.3,1) .14s; transform-origin: bottom; transform-box: fill-box; }

  /* Active states */
  .uam-host-charts:hover .uam-charts-bar1,
  .uam-host-charts:focus-visible .uam-charts-bar1 { transform: scaleY(1); }
  .uam-host-charts:hover .uam-charts-bar2,
  .uam-host-charts:focus-visible .uam-charts-bar2 { transform: scaleY(1); }
  .uam-host-charts:hover .uam-charts-bar3,
  .uam-host-charts:focus-visible .uam-charts-bar3 { transform: scaleY(1); }

  @media (prefers-reduced-motion: reduce) {
    .uam-charts-bar1,
    .uam-charts-bar2,
    .uam-charts-bar3 { transition: none !important; }
  }
`

export default function ProductLogo() {
  return (
    <span
      className="uam-host-charts inline-flex h-6 w-6 shrink-0 items-center justify-center"
      aria-hidden="true"
    >
      <style>{CSS}</style>
      <svg viewBox="0 0 64 64" className="h-6 w-6" aria-hidden="true">
        <rect x="0" y="0" width="64" height="64" rx="14" fill="#0f172a" />
        <rect x={13} y={34} width={9} height={16} rx={2} fill="#ff9a1f" className="uam-charts-bar1" />
        <rect x={27.5} y={24} width={9} height={26} rx={2} fill="#fe8c01" className="uam-charts-bar2" />
        <rect x={42} y={16} width={9} height={34} rx={2} fill="#fe8c01" className="uam-charts-bar3" />
        <path d="M10 54h44" opacity={0.5} strokeWidth={3.2} strokeLinecap="round" stroke="#ffffff" fill="none" />
      </svg>
    </span>
  )
}
