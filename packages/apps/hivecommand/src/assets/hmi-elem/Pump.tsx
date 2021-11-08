import * as React from "react";

function SvgPump(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 94.31 75.79"
      {...props}
    >
      <g
        fill="none"
        stroke="#010101"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3.087}
      >
        <path d="M42.01 28.33L37.9 17.84l-4.54 11.57c-1.48 3.78-3.28 7.42-5.07 11.06a10.63 10.63 0 00-1 6 10.71 10.71 0 0021.34-1.28 10.62 10.62 0 00-1.32-5.14 98 98 0 01-5.3-11.72z" />
        <path d="M88.64 1.55H38.3c-20.1 0-36.68 16.13-36.75 36.22a36.35 36.35 0 1072.7.13v-1h14.4a4.13 4.13 0 004.13-4.14v-27a4.13 4.13 0 00-4.14-4.21z" />
      </g>
    </svg>
  );
}

export default SvgPump;
