export default function AllocateLogo({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Triangle icon */}
      <g transform="translate(4, 4)">
        <polygon points="26,2 50,46 2,46" fill="none" stroke="#D96C45" strokeWidth="2.2" />
        <polygon points="26,8 46,44 6,44" fill="none" stroke="#D96C45" strokeWidth="1.8" />
        <polygon points="26,14 42,42 10,42" fill="none" stroke="#D96C45" strokeWidth="1.5" />
        <polygon points="26,20 38,40 14,40" fill="none" stroke="#D96C45" strokeWidth="1.3" />
        <polygon points="26,26 34,38 18,38" fill="none" stroke="#D96C45" strokeWidth="1.1" />
        <polygon points="26,31 30,37 22,37" fill="none" stroke="#D96C45" strokeWidth="1" />
      </g>
      {/* Allocate text */}
      <text
        x="66"
        y="38"
        fontFamily="'Inter', system-ui, sans-serif"
        fontSize="26"
        fontWeight="500"
        fill="#D96C45"
        letterSpacing="-0.5"
      >
        Allocate
      </text>
    </svg>
  );
}
