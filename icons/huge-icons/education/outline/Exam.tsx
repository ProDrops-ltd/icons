import * as React from "react";
import type { SVGProps } from "react";
const SvgExam = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11 12V9a2 2 0 1 0-4 0v3m0-2h4m-4 5h10M7 18h5m2-10.5h3M15.5 6v3M6 22h12a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3Z"
    />
  </svg>
);
export default SvgExam;
