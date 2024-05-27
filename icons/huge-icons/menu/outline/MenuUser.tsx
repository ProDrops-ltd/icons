import * as React from "react";
import type { SVGProps } from "react";
const SvgMenuUser = (props: SVGProps<SVGSVGElement>) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14 12h8m-8-5h8m-6 10h6M10 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0m2 8c0 1.657-2.239 3-5 3s-5-1.343-5-3 2.239-3 5-3 5 1.343 5 3"
    />
  </svg>
);
export default SvgMenuUser;
