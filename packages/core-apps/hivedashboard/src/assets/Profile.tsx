import * as React from "react";

function SvgProfile(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 42.53 36.83"
      {...props}
    >
      <path
        d="M31.9 0H10.63L0 18.45l10.63 18.42H31.9l10.67-18.42zM20.98 6a5.77 5.77 0 11-5.77 5.77A5.76 5.76 0 0120.98 6zm6 25.09H14.93l-4.42-7.64s2.16-3.5 10.47-3.5 10.47 3.5 10.47 3.5z"
        fill="#f3b41b"
      />
    </svg>
  );
}

export default SvgProfile;
