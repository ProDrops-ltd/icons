import * as React from "react";
import type { SVGProps } from "react";
const SvgSmartKey = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.75 11.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15 7.36C14.232 6.52 13.172 6 12 6s-2.232.52-3 1.36m1.5 2.32c.384-.42.914-.68 1.5-.68s1.116.26 1.5.68M18 22h-8a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v7m-4.5 6h7a1.5 1.5 0 0 0 0-3h-7a1.5 1.5 0 0 0 0 3"
    />
  </svg>
);
export default SvgSmartKey;
