import * as React from "react";

function SvgTank(props: {device?: {setpoints?: {name: string, key: {key: string}, value: string, type: string}[]}, width: string, height: string, conf?: {level: {min: number, max: number}}, options?: {level: number}}) {
  
  const getLevel = (percent?: string) => {
    let level = parseFloat(`${percent || props.options?.level || 0}`);

    if(!props?.conf?.level?.min && !props?.conf?.level?.max){
      return level
    }


    return level //(level - props?.conf?.level?.min) / ((props?.conf?.level?.max - props?.conf?.level?.min) / 100)
  }

  console.log(props?.device)

  const renderSetpoint = () => {
    return props?.device?.setpoints?.map((setpoint, index) => {
      return (
        <line key={index} y1={`${121.72 - (120 / 100 * getLevel(setpoint.value))}`} x1="0" x2={`100%`} y2={`${121.72 - (120 / 100 * getLevel(setpoint.value))}`} stroke="red" strokeWidth="1" />
      )
    })
  }

  return (
    <>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 123.72 123.72"
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
          width={121.72}
          height={121.72}
          rx={12.41}
          fill="none"
          strokeMiterlimit={10}
          strokeWidth={2}
        />
        <rect
          x={2}
          y={121.72 - ((120 / 100 * getLevel()) || 86.56)}
          width={120}
          height={120 / 100 * getLevel() || 86.56}
          rx={12.41}
          style={{
            mixBlendMode: "overlay",
          }}
          fill="#0064b1"
        />
        {renderSetpoint()}
        {/* <rect
          x={10.28}
          y={26.88}
          width={74.18}
          height={86.56}
          rx={12.41}
          fill="none"
          strokeMiterlimit={10}
          strokeWidth={2}
          stroke="url(#Tank_svg__c)"
        /> */}
      </g>
    </svg>
    {/* <div style={{position: 'absolute', display: 'flex', alignItems: 'cetner', justifyContent: 'center', bottom: '0', right: '0', left: '0'}}>
      <span style={{color: 'white', fontSize: 10}}>{getLevel()?.toFixed(2)}%</span>
    </div> */}
    </>
  );
}

export default SvgTank;
