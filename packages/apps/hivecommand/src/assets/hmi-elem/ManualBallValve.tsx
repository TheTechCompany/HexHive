import * as React from "react";

function SvgManualBallValve(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 76.25 40.13"
      {...props}
    >
      <g fill="none" stroke="#010101" strokeMiterlimit={10} strokeWidth={3.087}>
        <circle cx={38.18} cy={20.06} r={18.52} />
        <path d="M19.65 20.06a18.4 18.4 0 011.92-8.21L5.33 3.73a2.63 2.63 0 00-3.8 2.35v28.08a2.63 2.63 0 003.8 2.35l16.32-8.14a18.53 18.53 0 01-2-8.31zM54.76 11.8a18.45 18.45 0 01-.05 16.61l16.2 8.1a2.63 2.63 0 003.8-2.35V6.06a2.63 2.63 0 00-3.8-2.35z" />
      </g>
    </svg>
  );
}

export default SvgManualBallValve;
