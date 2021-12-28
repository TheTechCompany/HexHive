import * as React from "react";

function SvgBallValve(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 76.25 76.82"
      {...props}
    >
      <g fill="none" strokeMiterlimit={10} strokeWidth={3.087}>
        <circle cx={38.18} cy={56.76} r={18.52} />
        <path d="M19.66 56.76a18.55 18.55 0 011.92-8.22L5.35 40.42a2.63 2.63 0 00-3.82 2.35v28.1a2.63 2.63 0 003.81 2.35l16.28-8.14a18.39 18.39 0 01-1.96-8.32zM54.76 48.5a18.53 18.53 0 010 16.61l16.19 8.09a2.63 2.63 0 003.81-2.35V42.77a2.63 2.63 0 00-3.81-2.35zM56.7 20.06a18.52 18.52 0 10-37 0v.34h37v-.34zM38.13 20.41v17.83" />
      </g>
    </svg>
  );
}

export default SvgBallValve;
