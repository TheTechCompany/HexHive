import * as React from "react";

function SvgPeople(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 45.98 45.98"
      {...props}
    >
      <g fill="#383232">
        <path d="M33.48 0h-21A12.52 12.52 0 00-.03 12.5v21a12.49 12.49 0 003 8.13 1.42 1.42 0 00.12.13 12.47 12.47 0 009.38 4.25h21a12.52 12.52 0 0012.5-12.51v-21A12.52 12.52 0 0033.48 0zM3.36 12.5a9.16 9.16 0 019.15-9.14h21a9.15 9.15 0 019.14 9.14v21a9.63 9.63 0 01-.21 2 20.46 20.46 0 00-7.33-10.15l-1.38-1-1 1.39a11.91 11.91 0 01-19.43 0l-1-1.39-1.38 1a19.55 19.55 0 00-7.43 9.62 9.38 9.38 0 01-.12-1.42zm30.12 30.17h-21a9.09 9.09 0 01-6.51-2.74c.16-4.31 2-7.82 5.64-10.91a15.27 15.27 0 0022.69 0 17 17 0 015.62 10.94 9.13 9.13 0 01-6.44 2.71z" />
        <path d="M22.99 28.55a9.81 9.81 0 10-9.8-9.81 9.82 9.82 0 009.8 9.81zm0-16.25a6.45 6.45 0 11-6.44 6.44 6.45 6.45 0 016.44-6.44z" />
      </g>
    </svg>
  );
}

export default SvgPeople;
