import * as React from "react";

function SvgSpeedController(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 63.85 35.96"
      {...props}
    >
      <defs>
        <linearGradient
          id="SpeedController_svg__a"
          x1={801.15}
          y1={351.58}
          x2={865}
          y2={351.58}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#f57f20" />
          <stop offset={0.49} stopColor="#fdb714" />
          <stop offset={1} stopColor="#f57f20" />
        </linearGradient>
        <linearGradient
          id="SpeedController_svg__b"
          x1={1094.93}
          y1={182.81}
          x2={1097.83}
          y2={182.81}
          gradientTransform="rotate(-45 1164.368 587.373)"
          xlinkHref="#SpeedController_svg__a"
        />
        <linearGradient
          id="SpeedController_svg__c"
          x1={821.55}
          y1={350.33}
          x2={843.3}
          y2={350.33}
          xlinkHref="#SpeedController_svg__a"
        />
      </defs>
      <path
        d="M862.64 345h-14.28a1.36 1.36 0 01-1.36-1.4V336a1.36 1.36 0 00-1.36-1.36H820a1.36 1.36 0 00-1.36 1.36v7.64a1.36 1.36 0 01-1.36 1.36h-13.77a1.36 1.36 0 00-1.36 1.36v10.19a1.36 1.36 0 001.36 1.36h13.81a1.36 1.36 0 011.36 1.36v8a1.36 1.36 0 001.36 1.36h25.6a1.36 1.36 0 001.36-1.43v-8a1.36 1.36 0 011.36-1.36h14.28a1.36 1.36 0 001.36-1.36v-10.16a1.36 1.36 0 00-1.36-1.32z"
        transform="translate(-801.15 -333.6)"
        fill="none"
        strokeMiterlimit={10}
        strokeWidth={2}
        stroke="url(#SpeedController_svg__a)"
      />
      <path
        d="M833.46 352.32l-.3.3a1.24 1.24 0 01-1.82-.08l-4.22-5.91a.26.26 0 01.36-.36l5.9 4.22a1.24 1.24 0 01.08 1.83z"
        transform="translate(-801.15 -333.6)"
        fill="url(#SpeedController_svg__b)"
      />
      <path
        d="M831.24 361.53a9.87 9.87 0 01-1-19.44 1.9 1.9 0 010-.25v-1.22a1.5 1.5 0 011.5-1.5H833a1.5 1.5 0 011.49 1.5v1.22a1.79 1.79 0 010 .23 9.87 9.87 0 01-.84 19.46s-.95-.03-2.41 0z"
        transform="translate(-801.15 -333.6)"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        stroke="url(#SpeedController_svg__c)"
      />
    </svg>
  );
}

export default SvgSpeedController;
