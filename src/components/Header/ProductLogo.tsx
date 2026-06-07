// Universal Charts brand icon — icon-only by design. The SDK's
// UniversalAppsNavBar renders the product name beside this slot.
export default function ProductLogo() {
  return (
    <span
      className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-orange-600 text-white"
      aria-hidden="true"
    >
      <svg viewBox="0 0 16 16" className="w-4 h-4" fill="currentColor">
        <rect x="2" y="8.5" width="2.6" height="5" rx="0.5" />
        <rect x="6.7" y="5" width="2.6" height="8.5" rx="0.5" />
        <rect x="11.4" y="2.5" width="2.6" height="11" rx="0.5" />
      </svg>
    </span>
  )
}
