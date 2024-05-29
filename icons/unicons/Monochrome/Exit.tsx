import * as React from "react";
import type { SVGProps } from "react";
const SvgExit = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#6563FF"
      d="m15.707 11.293-4-4a1 1 0 0 0-1.414 1.414L12.586 11H4v2h8.586l-2.293 2.293a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.414"
    />
    <path
      fill="#A2A1FF"
      d="M17 2H7a3.003 3.003 0 0 0-3 3v6h8.586l-2.293-2.293a1 1 0 0 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L12.586 13H4v6a3.003 3.003 0 0 0 3 3h10a3.004 3.004 0 0 0 3-3V5a3.003 3.003 0 0 0-3-3"
    />
  </svg>
);
export default SvgExit;
