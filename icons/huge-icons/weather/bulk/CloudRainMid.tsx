import * as React from "react";
import type { SVGProps } from "react";
const SvgCloudRainMid = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 11a7 7 0 0 0 7 7h8a5 5 0 1 0-1.561-9.751A7.002 7.002 0 0 0 2 11"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M10 18.5c0 1.105-.672 1.5-1.5 1.5S7 19.605 7 18.5 8.5 16 8.5 16s1.5 1.395 1.5 2.5M17 18.5c0 1.105-.672 1.5-1.5 1.5s-1.5-.395-1.5-1.5 1.5-2.5 1.5-2.5 1.5 1.395 1.5 2.5"
    />
  </svg>
);
export default SvgCloudRainMid;
