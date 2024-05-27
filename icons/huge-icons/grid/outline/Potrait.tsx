import * as React from "react";
import type { SVGProps } from "react";
const SvgPotrait = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 5v14M21 5v14m-11 2h4a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3"
    />
  </svg>
);
export default SvgPotrait;
