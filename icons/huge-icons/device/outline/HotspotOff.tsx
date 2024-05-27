import * as React from "react";
import type { SVGProps } from "react";
const SvgHotspotOff = (props: SVGProps<SVGSVGElement>) => (
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
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M22 22 2 2M14 14a2 2 0 1 1-2-2m0-4a6 6 0 0 1 6 6M7.757 18.243A5.98 5.98 0 0 1 6 14c0-2.17 1.151-4.07 2.876-5.124M4.93 21.071A9.97 9.97 0 0 1 2 14a9.99 9.99 0 0 1 4-8m15.405 11.405A10 10 0 0 0 22 14c0-5.523-4.477-10-10-10-1.196 0-2.342.21-3.405.595"
    />
  </svg>
);
export default SvgHotspotOff;
