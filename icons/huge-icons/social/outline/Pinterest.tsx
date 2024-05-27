import * as React from "react";
import type { SVGProps } from "react";
const SvgPinterest = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 20a9.99 9.99 0 0 1-4-8C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a10 10 0 0 1-3.131-.5l2.631-10"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M10.173 16.656A5 5 0 1 0 7.669 14.5"
    />
  </svg>
);
export default SvgPinterest;
