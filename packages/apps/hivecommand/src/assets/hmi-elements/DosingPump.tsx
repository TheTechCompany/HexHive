import * as React from "react";

function SvgDosingPump(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 29.52 61.8"
      {...props}
    >
      <defs>
        <linearGradient
          id="DosingPump_svg__a"
          x1={737.82}
          y1={414.19}
          x2={746.06}
          y2={414.19}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#f57f20" />
          <stop offset={0.49} stopColor="#fdb714" />
          <stop offset={1} stopColor="#f57f20" />
        </linearGradient>
        <linearGradient
          id="DosingPump_svg__b"
          x1={1350.26}
          y1={255.89}
          x2={1366.79}
          y2={255.89}
          gradientTransform="rotate(-90 582.56 823.69)"
          xlinkHref="#DosingPump_svg__a"
        />
        <linearGradient
          id="DosingPump_svg__c"
          x1={727.18}
          y1={432.59}
          x2={756.7}
          y2={432.59}
          xlinkHref="#DosingPump_svg__a"
        />
      </defs>
      <g
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <path
          d="M744.63 414.62l-2.69-5.55-2.7 5.55h0a3.13 3.13 0 105.39 0z"
          transform="translate(-727.18 -401.7)"
          stroke="url(#DosingPump_svg__a)"
        />
        <path
          stroke="url(#DosingPump_svg__b)"
          d="M14.76 54.99l7.51-14.53H7.24l7.52 14.53z"
        />
        <path
          d="M752.84 435h-8.22v-7.72h3.62a2.85 2.85 0 002.85-2.85v-18.88a2.84 2.84 0 00-2.85-2.85h-12.61a2.85 2.85 0 00-2.85 2.85v18.85a2.86 2.86 0 002.85 2.85h3.64V435H731a2.85 2.85 0 00-2.85 2.86v21.81a2.84 2.84 0 002.85 2.85h21.81a2.85 2.85 0 002.86-2.85v-21.84a2.86 2.86 0 00-2.83-2.83z"
          transform="translate(-727.18 -401.7)"
          stroke="url(#DosingPump_svg__c)"
        />
      </g>
    </svg>
  );
}

export default SvgDosingPump;
