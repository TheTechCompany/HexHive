import * as React from "react";

function SvgSensorBox(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 111.85 218.32"
      {...props}
    >
      <g fill="none" stroke="#000" strokeLinejoin="round">
        <path
          d="M94.91 2.76h-76c-7.78 0-14.09 5.64-14.09 12.6v28.85c0 7 6.31 12.59 14.09 12.59h21.44l16.56.27 16.56-.27h21.44c7.79 0 14.1-5.63 14.1-12.59V15.36c0-6.96-6.31-12.6-14.1-12.6z"
          strokeLinecap="round"
          strokeWidth={5.533}
        />
        <rect
          x={2.96}
          y={109.43}
          width={105.92}
          height={105.92}
          rx={13.31}
          strokeLinecap="round"
          strokeWidth={5.929}
        />
        <path strokeWidth={7.922} d="M57.01 56.77l-.09 53" />
      </g>
    </svg>
  );
}

export default SvgSensorBox;
