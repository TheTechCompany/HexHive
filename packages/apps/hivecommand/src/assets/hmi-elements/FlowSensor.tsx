import * as React from "react";

function SvgFlowSensor(props: any) {
  return (
    <>
     <div 
      style={{
        transform: `scaleX(${1 / (props.scaleX || 1)}) scaleY(${1 / (props.scaleY || 1)})`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '2px solid gray', 
        borderRadius: 5, 
        position: 'absolute', 
        top: 0, 
        height: 16,
        minWidth: 'max-content',
        width: '100%',
        lineHeight: '100%',
        left: 0, 
        right: 0
      }}>
      <span style={{fontSize: 12, color: 'white'}}>{props.options?.flow || '16.5 L/min'}</span>
    </div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 111.85 218.32"
      {...props}
    >
      <g
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3.087}
      >
         <rect
          x={2.96}
          y={109.43}
          width={105.92}
          height={105.92}
          rx={13.31}
          strokeLinecap="round"
          strokeWidth={5.929}
        />
        <path strokeWidth={7.922} d="M57.01 56.77l-.09 53" />

      </g>
    </svg>
    </>
  );
}

export default SvgFlowSensor;
