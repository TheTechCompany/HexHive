import * as React from "react";

function SvgCalender(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 82.05 90.38"
      {...props}
    >
      <g fill="#383232">
        <path d="M59.74 8.32h-1.71V3a3 3 0 00-6 0v5.32h-22V3a3 3 0 00-6 0v5.32H22.3A22.35 22.35 0 00.03 30.64v37.42a22.34 22.34 0 0022.32 22.32h37.42a22.34 22.34 0 0022.26-22.32V30.64A22.35 22.35 0 0059.74 8.32zm16.29 59.74a16.34 16.34 0 01-16.32 16.32H22.32A16.34 16.34 0 016.03 68.06V30.64a16.34 16.34 0 0116.32-16.32h1.68v2.66a3 3 0 006 0v-2.66h22v2.66a3 3 0 006 0v-2.66h1.73a16.34 16.34 0 0116.27 16.32z" />
        <path d="M68.64 30.88H13.42a3 3 0 000 6h55.22a3 3 0 000-6zM49.71 42.25H32.35a3 3 0 100 6h12.89a69.4 69.4 0 00-11.3 24 3 3 0 002.94 3.74h1.38a3 3 0 003-2.42c1.71-8.81 6.26-18.25 11-25.15a3 3 0 00.53-1.7v-1.5a3 3 0 00-3.08-2.97z" />
      </g>
    </svg>
  );
}

export default SvgCalender;