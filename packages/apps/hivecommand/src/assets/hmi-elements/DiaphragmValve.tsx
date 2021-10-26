import * as React from "react";

function SvgDiaphragmValve(props: {options: {opening: string, open: string}}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 62.32 35.12"
      {...props}
    >
      <defs>
        <linearGradient
          id="DiaphragmValve_svg__a"
          x1={636.1}
          y1={349.05}
          x2={698.41}
          y2={349.05}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor={props.options.opening == 'true' ? '#b2f520' : props.options.open == 'true' ? '#20f57c' : "#f57f20"} />
          <stop offset={0.49} stopColor={props.options.opening == 'true' ? '#d2fd14' : props.options.open == 'true' ? '#14fd62' : "#fdb714"} />
          <stop offset={1} stopColor={props.options.opening == 'true' ? '#b2f520' : props.options.open == 'true' ? '#20f57c' : "#f57f20"} />
        </linearGradient>
        <linearGradient
          id="DiaphragmValve_svg__b"
          x1={18.79}
          y1={17.36}
          x2={43.38}
          y2={17.36}
          xlinkHref="#DiaphragmValve_svg__a"
        />
      </defs>
      <path
        d="M696.08 342.6h-13.92a1.33 1.33 0 01-1.33-1.33v-7.45a1.33 1.33 0 00-1.33-1.33h-25a1.33 1.33 0 00-1.32 1.33v7.45a1.34 1.34 0 01-1.33 1.33h-13.43a1.32 1.32 0 00-1.32 1.32v9.93a1.32 1.32 0 001.32 1.33h13.47a1.33 1.33 0 011.33 1.33v7.77a1.32 1.32 0 001.32 1.33h25a1.32 1.32 0 001.33-1.33v-7.77a1.32 1.32 0 011.33-1.33h13.92a1.32 1.32 0 001.33-1.33v-9.93a1.32 1.32 0 00-1.37-1.32z"
        transform="translate(-636.1 -331.49)"
        fill="none"
        strokeMiterlimit={10}
        strokeWidth={2}
        stroke="url(#DiaphragmValve_svg__a)"
      />
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        stroke="url(#DiaphragmValve_svg__b)"
        d="M19.79 10.06v14.59l22.59-14.59v14.59L19.79 10.06z"
      />
    </svg>
  );
}

export default SvgDiaphragmValve;
