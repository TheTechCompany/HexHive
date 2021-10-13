import * as React from "react";

function SvgFlowSensor(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 32.15 68.12"
      {...props}
    >
      <defs>
        <linearGradient
          id="FlowSensor_svg__a"
          x1={675.77}
          y1={426.66}
          x2={689.12}
          y2={426.66}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#f57f20" />
          <stop offset={0.49} stopColor="#fdb714" />
          <stop offset={1} stopColor="#f57f20" />
        </linearGradient>
        <linearGradient
          id="FlowSensor_svg__b"
          x1={958.36}
          y1={104.48}
          x2={962.79}
          y2={104.48}
          gradientTransform="rotate(-45 1164.368 587.373)"
          xlinkHref="#FlowSensor_svg__a"
        />
        <linearGradient
          id="FlowSensor_svg__c"
          x1={666.37}
          y1={407.28}
          x2={698.52}
          y2={407.28}
          xlinkHref="#FlowSensor_svg__a"
        />
      </defs>
      <path
        d="M687.35 427.44l-4.91-10.09-4.9 10.09h0a5.68 5.68 0 109.81 0z"
        transform="translate(-666.37 -373.22)"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        stroke="url(#FlowSensor_svg__a)"
      />
      <path
        d="M683.75 394.5l-.46.47a1.89 1.89 0 01-2.78-.13l-6.45-9a.39.39 0 01.55-.55l9 6.44a1.88 1.88 0 01.14 2.77z"
        transform="translate(-666.37 -373.22)"
        fill="url(#FlowSensor_svg__b)"
      />
      <path
        d="M693.92 412.73h-9.66v-4.29a15.08 15.08 0 001.27-29.73 2 2 0 000-.35v-1.86a2.28 2.28 0 00-2.28-2.28h-1.87a2.28 2.28 0 00-2.28 2.28v1.86a2.34 2.34 0 000 .39 15.08 15.08 0 001.45 29.69v4.29h-9.41a2.45 2.45 0 00-2.45 2.45v22.71a2.45 2.45 0 002.45 2.45h22.7a2.45 2.45 0 002.45-2.45v-22.71a2.45 2.45 0 00-2.37-2.45z"
        transform="translate(-666.37 -373.22)"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        stroke="url(#FlowSensor_svg__c)"
      />
    </svg>
  );
}

export default SvgFlowSensor;
