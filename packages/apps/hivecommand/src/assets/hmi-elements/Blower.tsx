import * as React from "react";

function SvgBlower(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 73.62 48.64"
      {...props}
    >
      <defs>
        <linearGradient
          id="Blower_svg__a"
          x1={729.18}
          y1={338.92}
          x2={802.8}
          y2={338.92}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#f57f20" />
          <stop offset={0.49} stopColor="#fdb714" />
          <stop offset={1} stopColor="#f57f20" />
        </linearGradient>
        <linearGradient
          id="Blower_svg__b"
          x1={760.38}
          y1={337.72}
          x2={795.92}
          y2={337.72}
          xlinkHref="#Blower_svg__a"
        />
        <linearGradient
          id="Blower_svg__c"
          x1={42.67}
          y1={23.92}
          x2={55.45}
          y2={23.92}
          xlinkHref="#Blower_svg__a"
        />
        <linearGradient
          id="Blower_svg__d"
          x1={10.23}
          y1={12.71}
          x2={20.42}
          y2={12.71}
          xlinkHref="#Blower_svg__a"
        />
      </defs>
      <g fill="none" strokeWidth={2}>
        <path
          d="M778.48 315.6h-45.76c-2 3.48-2.54 7.46-2.54 11.75a23.46 23.46 0 003 11.57h22a23.32 23.32 0 1023.32-23.32z"
          transform="translate(-729.18 -314.6)"
          strokeMiterlimit={10}
          stroke="url(#Blower_svg__a)"
        />
        <path
          d="M794.81 334.74l-1.11-3.41a2.23 2.23 0 00-3.3-1.2l-7.95 5a5.31 5.31 0 00-2.49-1.75l2-9.14a2.22 2.22 0 00-2.17-2.7h-3.6a2.22 2.22 0 00-2.15 2.78l2.33 9.11a5.41 5.41 0 00-2.43 1.83l-8.08-4.71a2.23 2.23 0 00-3.24 1.24l-1.11 3.41a2.22 2.22 0 002 2.91l9.39.6a5.42 5.42 0 001 2.88l-7 6.23a2.22 2.22 0 00.18 3.46l2.9 2.11a2.23 2.23 0 003.38-1l3.47-8.74a5.41 5.41 0 003.05 0l3.76 8.55a2.22 2.22 0 003.35.9l2.9-2.11a2.22 2.22 0 00.12-3.51l-7.24-6a5.34 5.34 0 00.89-2.91l9.3-.93a2.23 2.23 0 001.85-2.9z"
          transform="translate(-729.18 -314.6)"
          strokeMiterlimit={10}
          stroke="url(#Blower_svg__b)"
        />
        <circle
          cx={49.06}
          cy={23.92}
          r={5.39}
          strokeMiterlimit={10}
          stroke="url(#Blower_svg__c)"
        />
        <path
          strokeLinejoin="round"
          stroke="url(#Blower_svg__d)"
          d="M11.23 12.71l8.19 4.24V8.48l-8.19 4.23z"
        />
      </g>
    </svg>
  );
}

export default SvgBlower;
