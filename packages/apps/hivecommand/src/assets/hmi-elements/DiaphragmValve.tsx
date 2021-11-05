import * as React from "react";

function SvgDiaphragmValve(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 76.48 39.78"
      {...props}
    >
      <g fill="none" strokeWidth={3.087}>
        <rect
          x={1.54}
          y={1.54}
          width={73.39}
          height={36.7}
          rx={5.54}
          strokeMiterlimit={10}
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7.03 1.54l31.21 36.7 31.21-36.7H7.03z"
        />
      </g>
    </svg>
  );
}

export default SvgDiaphragmValve;
