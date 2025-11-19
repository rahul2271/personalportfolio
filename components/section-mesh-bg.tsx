export function SectionMeshBg() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-30"
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern
          id="grid"
          width="60"
          height="60"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 60 0 L 0 0 0 60"
            fill="none"
            stroke="rgba(102, 200, 255, 0.15)"
            strokeWidth="1"
          />
        </pattern>
        <pattern
          id="dots"
          width="60"
          height="60"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="30" cy="30" r="2" fill="rgba(102, 200, 255, 0.3)" />
        </pattern>
        <linearGradient id="meshGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(102, 200, 255, 0.1)" />
          <stop offset="100%" stopColor="rgba(0, 255, 255, 0.05)" />
        </linearGradient>
      </defs>

      <rect width="1200" height="600" fill="url(#meshGradient)" />
      <rect width="1200" height="600" fill="url(#grid)" />
      <rect width="1200" height="600" fill="url(#dots)" />

      <circle cx="200" cy="150" r="100" fill="none" stroke="rgba(102, 200, 255, 0.1)" strokeWidth="2" />
      <circle cx="200" cy="150" r="70" fill="none" stroke="rgba(102, 200, 255, 0.15)" strokeWidth="1" />
      <circle cx="1000" cy="500" r="120" fill="none" stroke="rgba(0, 255, 255, 0.1)" strokeWidth="2" />
      <circle cx="1000" cy="500" r="80" fill="none" stroke="rgba(0, 255, 255, 0.15)" strokeWidth="1" />
    </svg>
  )
}
