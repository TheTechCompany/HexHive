import * as React from "react";

function SvgBlower(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 94.31 75.79"
      {...props}
    >
      <path
        d="M87.26 1.54h-49c-20.09 0-36.68 16.14-36.75 36.23a36.36 36.36 0 1072.71.13v-1h13a5.51 5.51 0 005.51-5.51V7.05a5.51 5.51 0 00-5.47-5.51z"
        fill="none"
        stroke="#010101"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3.087}
      />
      <circle
        cx={37.9}
        cy={37.9}
        r={14.4}
        fill="none"
        stroke="#010101"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3.087}
      />
      <path
        d="M37.89 52.3S42 70.48 21.8 70.48M48.08 48.08s15.76 10 1.45 24.26M52.3 37.9s18.18-4.11 18.18 16.12M37.89 23.49S33.79 5.31 54.02 5.31c0 0 18.32 1.66 18.32 18.67v2.28c-14.3-14.31-24.26 1.45-24.26 1.45M27.71 27.71s-15.76-10-1.46-24.26M23.49 37.9S5.31 42 5.31 21.77M27.71 48.08s-10 15.76-24.26 1.46"
        fill="none"
        stroke="#010101"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3.087}
      />
    </svg>
  );
}

export default SvgBlower;
