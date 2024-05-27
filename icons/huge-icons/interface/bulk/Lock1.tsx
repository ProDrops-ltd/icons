import * as React from "react";
import type { SVGProps } from "react";
const SvgLock1 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 12a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 13.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75M8.75 6a3.25 3.25 0 0 1 6.5 0v2H16q.385 0 .75.07V6a4.75 4.75 0 1 0-9.5 0v2.07A4 4 0 0 1 8 8h.75z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLock1;
