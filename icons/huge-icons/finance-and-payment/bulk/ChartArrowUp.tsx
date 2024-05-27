import * as React from "react";
import type { SVGProps } from "react";
const SvgChartArrowUp = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 1.25a.75.75 0 0 1 .75.75v16A3.25 3.25 0 0 0 6 21.25h16a.75.75 0 0 1 0 1.5H6A4.75 4.75 0 0 1 1.25 18V2A.75.75 0 0 1 2 1.25"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M16.75 9a.75.75 0 0 1 .75-.75H19c.966 0 1.75.784 1.75 1.75v1.5a.75.75 0 0 1-1.5 0v-.69l-2.305 2.306a2.75 2.75 0 0 1-3.89 0l-1.171-1.171a1.25 1.25 0 0 0-1.768 0L7.53 14.53a.75.75 0 0 1-1.06-1.06l2.585-2.586a2.75 2.75 0 0 1 3.89 0l1.171 1.172a1.25 1.25 0 0 0 1.768 0l2.305-2.306H17.5a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
      opacity={0.4}
    />
  </svg>
);
export default SvgChartArrowUp;
