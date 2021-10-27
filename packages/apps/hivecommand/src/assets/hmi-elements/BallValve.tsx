import * as React from "react";

function SvgBallValve(props: {width?: string, height?: string, options?: { open: string, opening: string}}) {
  return (
    <svg
      style={{
        filter: `hue-rotate(${props?.options?.open == 'true' ? '50deg' : '0deg'})`
      }}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 63.85 35.96"
      {...props}
    >
      <defs>
        <linearGradient
          id="BallValve_svg__a"
          x1={244.12}
          y1={240.3}
          x2={307.97}
          y2={240.3}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor={(props.options?.opening && props.options.opening == 'true') ? '#b2f520' : (props.options?.open == 'true' ? '#20f57c' : "#f57f20")} />
          <stop offset={0.49} stopColor={(props.options?.opening && props.options.opening == 'true') ? '#d2fd14' : (props.options?.open == 'true' ? '#14fd62' : "#fdb714")} />
          <stop offset={1} stopColor={(props.options?.opening && props.options.opening == 'true') ? '#b2f520' : (props.options?.open == 'true' ? '#20f57c' : "#f57f20")} />
        </linearGradient>
        <linearGradient
          id="BallValve_svg__b"
          x1={262.04}
          y1={240.2}
          x2={289.69}
          y2={240.2}
          xlinkHref="#BallValve_svg__a"
        />
        <linearGradient
          id="BallValve_svg__c"
          x1={262.04}
          y1={240.2}
          x2={289.69}
          y2={240.2}
          xlinkHref="#BallValve_svg__a"
        />
        <linearGradient
          id="BallValve_svg__d"
          x1={247.69}
          y1={240.2}
          x2={295.51}
          y2={240.2}
          xlinkHref="#BallValve_svg__a"
        />
      </defs>
      <path
        d="M307 235.05v10.18a1.36 1.36 0 01-1.37 1.36h-14.31A1.36 1.36 0 00290 248v8a1.36 1.36 0 01-1.36 1.36H263a1.36 1.36 0 01-1.36-1.36v-8a1.36 1.36 0 00-1.36-1.36h-13.8a1.36 1.36 0 01-1.36-1.36v-10.23a1.36 1.36 0 011.36-1.37h13.81a1.36 1.36 0 001.36-1.36v-7.63a1.36 1.36 0 011.36-1.37h25.59a1.36 1.36 0 011.36 1.37v7.63a1.36 1.36 0 001.36 1.36h14.28a1.37 1.37 0 011.4 1.37z"
        transform="translate(-244.12 -222.32)"
        fill="none"
        strokeMiterlimit={10}
        strokeWidth={2}
        stroke="url(#BallValve_svg__a)"
      />
      <path
        d="M271.41 238.13l-8.41-3.94v12l8.45-3.94a4.82 4.82 0 010-4.15z"
        transform="translate(-244.12 -222.32)"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.824}
        stroke="url(#BallValve_svg__b)"
      />
      <path
        d="M288.78 234.19l-8.46 3.94a4.82 4.82 0 010 4.15l8.46 3.94z"
        transform="translate(-244.12 -222.32)"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.824}
        stroke="url(#BallValve_svg__c)"
      />
      <path
        d="M271.41 242.28a4.91 4.91 0 008.91 0 4.82 4.82 0 000-4.15 4.91 4.91 0 10-8.91 4.15z"
        transform="translate(-244.12 -222.32)"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.824}
        stroke="url(#BallValve_svg__d)"
      />
    </svg>
  );
}

export default SvgBallValve;
