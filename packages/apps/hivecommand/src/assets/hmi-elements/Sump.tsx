import * as React from "react";

function SvgSump(props: any) {
  return (
    <>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 94.31 75.79"
      style={{fill: props?.style?.stroke || '#000'}}

    >
      <g>
        <path d="M88.67 0H38.29A38.17 38.17 0 000 37.77a37.9 37.9 0 0075.79.64h12.88a5.68 5.68 0 005.68-5.68v-27A5.69 5.69 0 0088.67 0zM46.1 54.33a12.27 12.27 0 01-8.19 3.12 12.59 12.59 0 01-1.37-.08 12.24 12.24 0 01-9.6-17.56v-.09c1.73-3.52 3.53-7.16 5-10.85l4.54-11.59a1.54 1.54 0 012.87 0l4.11 10.49a96.79 96.79 0 005.21 11.55 12.24 12.24 0 01-2.57 15z" />
        <path d="M40.56 28.89l-2.66-6.82L34.79 30c-1.49 3.81-3.31 7.51-5.08 11.08v.1a9.16 9.16 0 1016.26-.37 101 101 0 01-5.41-11.92z" />
      </g>
    </svg>
        <div style={{
          position: 'absolute', 
          width: '100%',
          border: '2px solid gray', 
          borderRadius: 5, 
          transform: `rotate(${1 * (props.rotation || 0)}deg) scaleX(${1 / (props.scaleX || 1)}) scaleY(${1/(props.scaleY || 1)})`, 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          lineHeight: '100%',
          bottom: 27, 
          left: '-36px'
        }}>
        <span style={{color: 'white', fontSize: 10}}>{props.options?.speed > 0 ? parseFloat(props.options?.speed).toFixed(2) : 0 }%</span>
      </div>
    </>
  );
}

export default SvgSump;
