'use client'

export default function SectionBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Animated gradient mesh */}
      <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 1200 800" preserveAspectRatio="none">
        <defs>
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="4" result="noise" seed="2" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="50" />
          </filter>
          <linearGradient id="meshGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(102, 200, 255, 0.3)" />
            <stop offset="50%" stopColor="rgba(0, 212, 255, 0.2)" />
            <stop offset="100%" stopColor="rgba(102, 200, 255, 0.1)" />
          </linearGradient>
        </defs>
        
        {/* Grid pattern with animation */}
        <g filter="url(#noise)" opacity="0.6">
          {Array.from({ length: 12 }).map((_, i) => (
            <line key={`v-${i}`} x1={i * 100} y1="0" x2={i * 100} y2="800" stroke="url(#meshGradient)" strokeWidth="2" opacity="0.5" />
          ))}
          {Array.from({ length: 8 }).map((_, i) => (
            <line key={`h-${i}`} x1="0" y1={i * 100} x2="1200" y2={i * 100} stroke="url(#meshGradient)" strokeWidth="2" opacity="0.5" />
          ))}
        </g>

        {/* Animated hexagon pattern */}
        <g opacity="0.2">
          {Array.from({ length: 20 }).map((_, i) => {
            const x = (i % 5) * 240 + 60
            const y = Math.floor(i / 5) * 200 + 100
            return (
              <g key={`hex-${i}`}>
                <polygon
                  points={`${x},${y - 40} ${x + 35},${y - 20} ${x + 35},${y + 20} ${x},${y + 40} ${x - 35},${y + 20} ${x - 35},${y - 20}`}
                  fill="none"
                  stroke="rgba(102, 200, 255, 0.4)"
                  strokeWidth="1.5"
                />
              </g>
            )
          })}
        </g>
      </svg>

      {/* Floating animated circles */}
      <div className="absolute top-20 right-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float-rotate" />
      <div className="absolute -bottom-20 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }} />
    </div>
  )
}
