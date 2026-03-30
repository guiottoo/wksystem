export default function AllocateLogo({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 210 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Nested triangle outlines — same apex, expanding base */}
      <g>
        <polygon points="26,1 51,48 1,48"   fill="none" stroke="#D96C45" strokeWidth="2"   strokeLinejoin="round" />
        <polygon points="26,7 47,44 5,44"   fill="none" stroke="#D96C45" strokeWidth="1.7" strokeLinejoin="round" />
        <polygon points="26,13 43,40 9,40"  fill="none" stroke="#D96C45" strokeWidth="1.5" strokeLinejoin="round" />
        <polygon points="26,19 39,36 13,36" fill="none" stroke="#D96C45" strokeWidth="1.3" strokeLinejoin="round" />
        <polygon points="26,24 35,32 17,32" fill="none" stroke="#D96C45" strokeWidth="1.1" strokeLinejoin="round" />
        <polygon points="26,29 31,28 21,28" fill="none" stroke="#D96C45" strokeWidth="1"   strokeLinejoin="round" />
      </g>

      {/* Wordmark */}
      <text
        x="64"
        y="36"
        fontFamily="'Inter', system-ui, -apple-system, sans-serif"
        fontSize="24"
        fontWeight="500"
        fill="#D96C45"
        letterSpacing="-0.3"
      >
        Allocate
      </text>
    </svg>
  );
}
