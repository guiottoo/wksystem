export default function AllocateLogo({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 220 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Nested triangle outlines — faithful to the Allocate brand mark */}
      <g>
        <polygon points="24,2 47,46 1,46"   fill="none" stroke="#D96C45" strokeWidth="2.2" strokeLinejoin="miter" />
        <polygon points="24,9 43,43 5,43"    fill="none" stroke="#D96C45" strokeWidth="1.8" strokeLinejoin="miter" />
        <polygon points="24,15 39,40 9,40"   fill="none" stroke="#D96C45" strokeWidth="1.6" strokeLinejoin="miter" />
        <polygon points="24,21 35,37 13,37"  fill="none" stroke="#D96C45" strokeWidth="1.4" strokeLinejoin="miter" />
        <polygon points="24,26 31,34 17,34"  fill="none" stroke="#D96C45" strokeWidth="1.2" strokeLinejoin="miter" />
      </g>

      {/* Wordmark */}
      <text
        x="62"
        y="35"
        fontFamily="'Inter', system-ui, -apple-system, sans-serif"
        fontSize="26"
        fontWeight="600"
        fill="#D96C45"
        letterSpacing="0"
      >
        Allocate
      </text>
    </svg>
  );
}
