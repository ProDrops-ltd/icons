import * as React from "react";
import type { SVGProps } from "react";
const SvgCloudMoon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 13a7 7 0 0 0 7 7h8a5 5 0 1 0-1.561-9.751 7.03 7.03 0 0 0-2.983-3.338A7 7 0 0 0 2 13"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M21 12a5 5 0 1 0-8.544-5.089 7.03 7.03 0 0 1 2.983 3.338 5 5 0 0 1 1.56-.249c1.637 0 3.09.786 4.001 2"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCloudMoon;
