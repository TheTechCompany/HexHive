import * as React from "react";

function SvgMessage(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 124.58 144.88"
      {...props}
    >
      <path d="M20.73 121.01a4 4 0 01-3.59-5.76 81.81 81.81 0 008-25.33l-5.54-3.2a9.15 9.15 0 01-4.56-7.9V34.74a9.18 9.18 0 014.56-7.91l38.18-22a9.16 9.16 0 019.12 0l38.18 22a9.18 9.18 0 014.56 7.91v44.08a9.15 9.15 0 01-4.56 7.9l-38.18 22a9.13 9.13 0 01-9.13 0l-7.29-4.15c-13 7.61-27.64 15.84-27.79 15.93a4.07 4.07 0 01-1.96.51zM62.29 11.57a1.09 1.09 0 00-.56.15l-38.18 22a1.13 1.13 0 00-.56 1V78.8a1.11 1.11 0 00.56 1l7.77 4.49a4 4 0 012 3.75 78.54 78.54 0 01-4.37 19.73c5.68-3.25 12.92-7.41 19.47-11.27a4 4 0 014 0l9.29 5.36a1.12 1.12 0 001.12 0l38.18-22a1.13 1.13 0 00.56-1V34.74a1.15 1.15 0 00-.56-1l-38.18-22a1.12 1.12 0 00-.54-.17z" />
      <path d="M38.72 47.55a8 8 0 108 8 8 8 0 00-8-8zM61.93 47.55a8 8 0 108 8 8 8 0 00-8-8zM85.13 47.55a8 8 0 108 8 8 8 0 00-8-8z" />
      <path fill="none" d="M0 0h124.58v144.88H0z" />
    </svg>
  );
}

export default SvgMessage;