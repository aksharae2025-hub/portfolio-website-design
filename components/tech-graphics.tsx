export function CircuitPattern() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-5 pointer-events-none"
      viewBox="0 0 1000 1000"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern id="circuit" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
          <path
            d="M0,100 L50,100 L50,50 L100,50 L100,100 L150,100 L150,150 L200,150"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="50" cy="100" r="3" fill="currentColor" />
          <circle cx="100" cy="50" r="3" fill="currentColor" />
          <circle cx="150" cy="100" r="3" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="1000" height="1000" fill="url(#circuit)" />
    </svg>
  )
}

export function GridPattern() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-3 pointer-events-none"
      viewBox="0 0 1000 1000"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern id="grid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="1000" height="1000" fill="url(#grid)" />
    </svg>
  )
}

export function HexPattern() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-4 pointer-events-none"
      viewBox="0 0 1000 1000"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern id="hexagons" x="0" y="0" width="100" height="115.5" patternUnits="userSpaceOnUse">
          <polygon
            points="50,0 100,28.866 100,86.603 50,115.47 0,86.603 0,28.866"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="1000" height="1000" fill="url(#hexagons)" />
    </svg>
  )
}

export function WavePattern() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-3 pointer-events-none"
      viewBox="0 0 1000 200"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern id="waves" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
          <path d="M0,100 Q50,50 100,100 T200,100" stroke="currentColor" strokeWidth="1" fill="none" />
          <path d="M0,120 Q50,70 100,120 T200,120" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.5" />
        </pattern>
      </defs>
      <rect width="1000" height="1000" fill="url(#waves)" />
    </svg>
  )
}

export function DataNodePattern() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-5 pointer-events-none"
      viewBox="0 0 1000 1000"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern id="nodes" x="0" y="0" width="250" height="250" patternUnits="userSpaceOnUse">
          <circle cx="50" cy="50" r="4" fill="currentColor" />
          <circle cx="200" cy="50" r="4" fill="currentColor" />
          <circle cx="50" cy="200" r="4" fill="currentColor" />
          <circle cx="200" cy="200" r="4" fill="currentColor" />
          <circle cx="125" cy="125" r="3" fill="currentColor" opacity="0.7" />
          <line x1="50" y1="50" x2="200" y2="50" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
          <line x1="50" y1="50" x2="50" y2="200" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
          <line x1="200" y1="50" x2="200" y2="200" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
          <line x1="50" y1="200" x2="200" y2="200" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        </pattern>
      </defs>
      <rect width="1000" height="1000" fill="url(#nodes)" />
    </svg>
  )
}
