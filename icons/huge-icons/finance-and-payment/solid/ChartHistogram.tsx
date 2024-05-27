import * as React from "react";
import type { SVGProps } from "react";
const SvgChartHistogram = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.75 1a.75.75 0 0 1 .75.75v16A3.25 3.25 0 0 0 5.75 21h16a.75.75 0 0 1 0 1.5h-16A4.75 4.75 0 0 1 1 17.75v-16A.75.75 0 0 1 1.75 1m9.75 10.75a.75.75 0 0 0-1.5 0v5a.75.75 0 0 0 1.5 0zm-4 2a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0zm7.25-.75a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75m4.75 3.75v-5a.75.75 0 0 0-1.5 0v5a.75.75 0 0 0 1.5 0m-.22-10.47a.75.75 0 0 0-1.06-1.06l-2.586 2.585a1.25 1.25 0 0 1-1.768 0l-1.171-1.171a2.75 2.75 0 0 0-3.89 0L6.22 9.22a.75.75 0 1 0 1.06 1.06l2.586-2.585a1.25 1.25 0 0 1 1.768 0l1.172 1.171a2.75 2.75 0 0 0 3.889 0z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgChartHistogram;
