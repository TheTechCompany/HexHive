import * as React from "react";

function SvgConductivity(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 31.64 67"
      {...props}
    >
      <defs>
        <linearGradient
          id="Conductivity_svg__a"
          x1={1081.83}
          y1={-67.12}
          x2={1086.18}
          y2={-67.12}
          gradientTransform="rotate(-45 1164.368 587.373)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#f57f20" />
          <stop offset={0.49} stopColor="#fdb714" />
          <stop offset={1} stopColor="#f57f20" />
        </linearGradient>
        <linearGradient
          id="Conductivity_svg__b"
          x1={632.44}
          y1={198.42}
          x2={664.09}
          y2={198.42}
          xlinkHref="#Conductivity_svg__a"
        />
        <linearGradient
          id="Conductivity_svg__c"
          x1={10.59}
          y1={52.58}
          x2={20.21}
          y2={52.58}
          xlinkHref="#Conductivity_svg__a"
        />
      </defs>
      <path
        d="M649.61 185.81l-.46.45a1.85 1.85 0 01-2.73-.12l-6.34-8.87a.39.39 0 01.54-.54l8.86 6.33a1.87 1.87 0 01.13 2.75z"
        transform="translate(-632.44 -164.92)"
        fill="url(#Conductivity_svg__a)"
      />
      <path
        d="M659.55 203.78h-9.5v-4.22a14.82 14.82 0 001.25-29.22 2.09 2.09 0 000-.35v-1.83a2.24 2.24 0 00-2.24-2.24h-1.84a2.24 2.24 0 00-2.24 2.24V170a2.58 2.58 0 000 .39 14.82 14.82 0 001.42 29.18v4.22h-9.25a2.41 2.41 0 00-2.41 2.41v22.32a2.41 2.41 0 002.41 2.41h22.32a2.41 2.41 0 002.41-2.41v-22.33a2.41 2.41 0 00-2.33-2.41z"
        transform="translate(-632.44 -164.92)"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        stroke="url(#Conductivity_svg__b)"
      />
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        stroke="url(#Conductivity_svg__c)"
        d="M19.2 44.9l-7.61 7.68h7.61l-7.61 7.67"
      />
    </svg>
  );
}

export default SvgConductivity;
