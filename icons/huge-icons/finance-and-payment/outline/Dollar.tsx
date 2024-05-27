import * as React from "react";
import type { SVGProps } from "react";
const SvgDollar = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.5 8.5A3.5 3.5 0 1 0 12 12M8.5 15.5A3.5 3.5 0 1 0 12 12"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 3v18"
    />
  </svg>
);
export default SvgDollar;
