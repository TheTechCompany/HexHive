import * as React from "react";

function SvgFlowSensor(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 75.11 75.11"
      {...props}
    >
      <g
        fill="none"
        stroke="#010101"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3.087}
      >
        <rect x={1.54} y={1.54} width={72.02} height={72.02} rx={7.36} />
        <path d="M58.97 37.21L22.73 16.29v41.84l36.24-20.92z" />
      </g>
    </svg>
  );
}

export default SvgFlowSensor;
