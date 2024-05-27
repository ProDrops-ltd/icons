import * as React from "react";
import type { SVGProps } from "react";
const SvgCompass = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="m20.97 20.83-.08.648a.4.4 0 0 1-.55.32l-.629-.261a4.12 4.12 0 0 1-1.965-1.696L12 10.156 6.254 19.84a4.12 4.12 0 0 1-1.965 1.696l-.628.261a.4.4 0 0 1-.55-.32l-.081-.648a3.95 3.95 0 0 1 .526-2.504l5.768-9.722a3.13 3.13 0 0 0 2.633 1.479h.086a3.13 3.13 0 0 0 2.633-1.479l5.768 9.722c.449.757.634 1.636.526 2.504"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12.75 2a.75.75 0 0 0-1.5 0v2.11c-1.358.326-2.365 1.52-2.365 2.942 0 .567.16 1.098.439 1.552a3.13 3.13 0 0 0 2.633 1.479h.086a3.13 3.13 0 0 0 2.633-1.479c.279-.454.439-.985.439-1.552 0-1.423-1.007-2.616-2.365-2.943zM2.25 15a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCompass;
