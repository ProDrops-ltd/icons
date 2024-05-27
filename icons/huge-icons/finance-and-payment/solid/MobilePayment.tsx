import * as React from "react";
import type { SVGProps } from "react";
const SvgMobilePayment = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 2h8a2 2 0 0 1 2 2v1.5h-4.5A1.5 1.5 0 0 0 11 7v8a1.5 1.5 0 0 0 1.5 1.5H17V20a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m4 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2m1.5-13H17a2 2 0 0 1 2 2v.25h-6.5zm0 3.75H19V13a2 2 0 0 1-2 2h-4.5z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMobilePayment;
