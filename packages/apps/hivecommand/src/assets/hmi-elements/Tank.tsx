import * as React from "react";

function SvgTank(props: {width?: string, height?: string, options?: {level: number}, conf?: {minLevel: number, maxLevel: number}}) {

  const getLevel = () => {
    if(!props.conf?.minLevel && !props.conf?.maxLevel){
      return props.options?.level;
    }


    return (props.options?.level - props.conf?.minLevel) / ((props.conf?.maxLevel - props.conf?.minLevel) / 100)
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 94.74 123.72"
      {...props}
    >
      <defs>
        <linearGradient
          id="Tank_svg__a"
          y1={61.86}
          x2={94.74}
          y2={61.86}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#f57f20" />
          <stop offset={0.49} stopColor="#fdb714" />
          <stop offset={1} stopColor="#f57f20" />
        </linearGradient>
        <linearGradient
          id="Tank_svg__b"
          data-name="water gradient"
          x1={10.28}
          y1={70.16}
          x2={84.46}
          y2={70.16}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#0064b1" />
          <stop offset={0.49} stopColor="#00a1e4" />
          <stop offset={1} stopColor="#0064b1" />
        </linearGradient>
        <linearGradient
          id="Tank_svg__c"
          x1={9.28}
          y1={70.16}
          x2={85.46}
          y2={70.16}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#00a1e4" />
          <stop offset={0.52} stopColor="#0064b1" />
          <stop offset={1} stopColor="#00a1e4" />
        </linearGradient>
      </defs>
      <g
        style={{
          isolation: "isolate",
        }}
      >
        <rect
          x={1}
          y={1}
          width={92.74}
          height={121.72}
          rx={12.41}
          fill="none"
          strokeMiterlimit={10}
          strokeWidth={2}
          stroke="url(#Tank_svg__a)"
        />
        <rect
          x={10.28}
          y={121.72 - ((120 / 100 * getLevel()) || 86.56)}
          width={74.18}
          height={(120 / 100 * getLevel()) || 86.56}
          rx={12.41}
          style={{
            mixBlendMode: "overlay",
          }}
          fill="url(#Tank_svg__b)"
        />
        <rect
          x={10.28}
          y={121.72 - ((120 / 100 * getLevel()) || 86.56)}
          width={74.18}
          height={(120 / 100 * getLevel()) || 86.56}
          rx={12.41}
          fill="none"
          strokeMiterlimit={10}
          strokeWidth={2}
          stroke="url(#Tank_svg__c)"
        />
      </g>
    </svg>
  );
}

export default SvgTank;
