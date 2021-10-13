import * as React from "react";

function SvgHalfDrain(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 41.38 74.84"
      {...props}
    >
      <defs>
        <linearGradient
          id="HalfDrain_svg__a"
          x1={297.1}
          y1={259.93}
          x2={312.74}
          y2={259.93}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#f57f20" />
          <stop offset={0.49} stopColor="#fdb714" />
          <stop offset={1} stopColor="#f57f20" />
        </linearGradient>
        <linearGradient
          id="HalfDrain_svg__b"
          x1={283.08}
          y1={220.89}
          x2={324.46}
          y2={220.89}
          xlinkHref="#HalfDrain_svg__a"
        />
      </defs>
      <path
        d="M310.67 260.85L304.92 249l-5.76 11.84h0a6.66 6.66 0 1011.51 0z"
        transform="translate(-283.08 -197.17)"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.33}
        stroke="url(#HalfDrain_svg__a)"
      />
      <path
        d="M319.73 236.89v-37.5a1.22 1.22 0 00-1.21-1.22h-29.07a1.22 1.22 0 00-1.21 1.22v37.5a1.22 1.22 0 01-1.22 1.22h-1.72a1.21 1.21 0 00-1.22 1.21v3.07a1.22 1.22 0 001.22 1.22h36.94a1.22 1.22 0 001.22-1.22v-3.07a1.21 1.21 0 00-1.22-1.21H321a1.22 1.22 0 01-1.27-1.22z"
        transform="translate(-283.08 -197.17)"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        stroke="url(#HalfDrain_svg__b)"
      />
    </svg>
  );
}

export default SvgHalfDrain;
