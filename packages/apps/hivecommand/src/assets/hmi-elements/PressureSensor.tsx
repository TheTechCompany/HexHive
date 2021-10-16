import * as React from "react";

function SvgPressureSensor(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 31.01 65.62"
      {...props}
    >
      <defs>
        <linearGradient
          id="PressureSensor_svg__a"
          x1={10.91}
          y1={51.48}
          x2={23.79}
          y2={51.48}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#f57f20" />
          <stop offset={0.49} stopColor="#fdb714" />
          <stop offset={1} stopColor="#f57f20" />
        </linearGradient>
        <linearGradient
          id="PressureSensor_svg__b"
          x1={926.82}
          y1={220.51}
          x2={931.08}
          y2={220.51}
          gradientTransform="rotate(-45 1164.368 587.373)"
          xlinkHref="#PressureSensor_svg__a"
        />
        <linearGradient
          id="PressureSensor_svg__c"
          x1={726.43}
          y1={511.08}
          x2={757.44}
          y2={511.08}
          xlinkHref="#PressureSensor_svg__a"
        />
        <linearGradient
          id="PressureSensor_svg__d"
          x1={7.03}
          y1={51.48}
          x2={9.03}
          y2={51.48}
          xlinkHref="#PressureSensor_svg__a"
        />
      </defs>
      <path
        fill="none"
        strokeLinejoin="round"
        strokeWidth={2}
        stroke="url(#PressureSensor_svg__a)"
        d="M11.91 51.48l10.88 5.62V45.86l-10.88 5.62z"
      />
      <path
        d="M743.25 498.73l-.45.45a1.81 1.81 0 01-2.67-.12l-6.21-8.68a.38.38 0 01.53-.53l8.67 6.2a1.81 1.81 0 01.13 2.68z"
        transform="translate(-726.43 -478.27)"
        fill="url(#PressureSensor_svg__b)"
      />
      <path
        d="M753 516.32h-9.3v-4.13a14.51 14.51 0 001.23-28.6 1.84 1.84 0 000-.33v-1.8a2.19 2.19 0 00-2.19-2.19H741a2.19 2.19 0 00-2.19 2.19v1.8a2.21 2.21 0 000 .37 14.5 14.5 0 001.39 28.56v4.13h-9.05a2.36 2.36 0 00-2.36 2.36v21.85a2.35 2.35 0 002.36 2.35H753a2.36 2.36 0 002.36-2.35v-21.85a2.36 2.36 0 00-2.36-2.36z"
        transform="translate(-726.43 -478.27)"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        stroke="url(#PressureSensor_svg__c)"
      />
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        stroke="url(#PressureSensor_svg__d)"
        d="M8.03 45.86V57.1"
      />
    </svg>
  );
}

export default SvgPressureSensor;
