import * as React from "react";
import type { SVGProps } from "react";
const SvgImageCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M21.825 13.874q.174-.912.175-1.874c0-5.523-4.477-10-10-10S2 6.477 2 12c0 .745.082 1.471.236 2.17m19.589-.296C20.948 18.5 16.882 22 12 22c-4.778 0-8.773-3.35-9.764-7.83m19.589-.296-2.764-1.99a4 4 0 0 0-5.013.273l-4.096 3.686a4 4 0 0 1-5.013.273L2.236 14.17M11 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
    />
  </svg>
);
export default SvgImageCircle;
