import * as React from "react";
import type { SVGProps } from "react";
const SvgGivePill = (props: SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      d="M16 5a3 3 0 1 1 6 0v2.25h-6zm0 6V8.75h6V11a3 3 0 1 1-6 0M2 10h2l6.262 2.74a1.91 1.91 0 0 1 .757 2.906l2.714 1.72a6 6 0 0 0 2.683.634H18a2 2 0 1 1 0 4H9.889a8 8 0 0 1-3.578-.845L2 19z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgGivePill;
