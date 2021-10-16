import * as React from "react";

function SvgPump(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 81.21 42.84"
      {...props}
    >
      <defs>
        <linearGradient
          id="Pump_svg__a"
          x1={1883.51}
          y1={988.57}
          x2={1964.71}
          y2={988.57}
          gradientTransform="matrix(-1 0 0 1 2564.78 -529.4)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#f57f20" />
          <stop offset={0.49} stopColor="#fdb714" />
          <stop offset={1} stopColor="#f57f20" />
        </linearGradient>
        <linearGradient
          id="Pump_svg__b"
          x1={1919.37}
          y1={978.31}
          x2={1928.54}
          y2={978.31}
          gradientTransform="matrix(-1 0 0 1 1964.71 -967.15)"
          xlinkHref="#Pump_svg__a"
        />
        <linearGradient
          id="Pump_svg__c"
          x1={1905.53}
          y1={978.31}
          x2={1914.71}
          y2={978.31}
          gradientTransform="matrix(-1 0 0 1 1964.71 -967.15)"
          xlinkHref="#Pump_svg__a"
        />
        <linearGradient
          id="Pump_svg__d"
          x1={1891.69}
          y1={978.31}
          x2={1900.87}
          y2={978.31}
          gradientTransform="matrix(-1 0 0 1 1964.71 -967.15)"
          xlinkHref="#Pump_svg__a"
        />
        <linearGradient
          id="Pump_svg__e"
          x1={1936.16}
          y1={987.7}
          x2={1950.27}
          y2={987.7}
          xlinkHref="#Pump_svg__a"
        />
      </defs>
      <g fill="none" strokeWidth={2}>
        <path
          d="M621.49 438.76h56.56c1.74 3 2.22 6.52 2.22 10.28a20.69 20.69 0 01-2.63 10.14h-35.73a20.42 20.42 0 11-20.42-20.42z"
          transform="translate(-600.07 -437.76)"
          strokeMiterlimit={10}
          stroke="url(#Pump_svg__a)"
        />
        <path
          strokeLinejoin="round"
          stroke="url(#Pump_svg__b)"
          d="M44.34 11.16l-7.17 3.71V7.45l7.17 3.71z"
        />
        <path
          strokeLinejoin="round"
          stroke="url(#Pump_svg__c)"
          d="M58.18 11.16l-7.17 3.71V7.45l7.17 3.71z"
        />
        <path
          strokeLinejoin="round"
          stroke="url(#Pump_svg__d)"
          d="M72.02 11.16l-7.17 3.71V7.45l7.17 3.71z"
        />
        <path
          d="M616.34 459.14l5.23-10.77 5.23 10.77h0a6.06 6.06 0 11-11.29 3 5.92 5.92 0 01.83-3z"
          transform="translate(-600.07 -437.76)"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="url(#Pump_svg__e)"
        />
      </g>
    </svg>
  );
}

export default SvgPump;
