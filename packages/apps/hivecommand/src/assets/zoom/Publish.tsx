import * as React from "react";

function SvgPublish(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="10 10 70 60" {...props}>
      <path
        d="M60.04 13.17H28.72L13.06 40.3l15.66 27.12h31.32L75.7 40.3zm-9.09 32.06a4 4 0 01-2 .53 4.76 4.76 0 01-.65-.06v12a4 4 0 01-7.91 0v-12a3.89 3.89 0 01-2.62-.48 3.94 3.94 0 01-1.44-5.4l4.59-8a4 4 0 016.85 0l4.6 8a4 4 0 01-1.42 5.41zm.62-18.34H37.19a4 4 0 110-7.91h14.38a4 4 0 010 7.91z"
        fill="#f3b41b"
      />
    </svg>
  );
}

export default SvgPublish;
