import * as React from "react";

function SvgDrain(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 41.38 120.28"
      {...props}
    >
      <defs>
        <linearGradient
          id="Drain_svg__a"
          x1={156.17}
          y1={272.26}
          x2={171.81}
          y2={272.26}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#f57f20" />
          <stop offset={0.49} stopColor="#fdb714" />
          <stop offset={1} stopColor="#f57f20" />
        </linearGradient>
        <linearGradient
          id="Drain_svg__b"
          x1={148.46}
          y1={165.07}
          x2={148.46}
          y2={165.07}
          xlinkHref="#Drain_svg__a"
        />
        <linearGradient
          id="Drain_svg__c"
          x1={143.3}
          y1={210.5}
          x2={184.68}
          y2={210.5}
          xlinkHref="#Drain_svg__a"
        />
      </defs>
      <path
        d="M169.74 273.18L164 261.34l-5.75 11.84h0a6.57 6.57 0 00-.91 3.35 6.66 6.66 0 1012.41-3.35z"
        transform="translate(-143.3 -164.07)"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.33}
        stroke="url(#Drain_svg__a)"
      />
      <path
        d="M148.46 165.07v84.68a.69.69 0 01-.69.69H145a.67.67 0 00-.68.68v4.13a.68.68 0 00.68.69h38a.69.69 0 00.69-.69v-4.13a.68.68 0 00-.69-.68h-2.36a.69.69 0 01-.68-.69v-84.68"
        transform="translate(-143.3 -164.07)"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        stroke="url(#Drain_svg__c)"
      />
    </svg>
  );
}

export default SvgDrain;
