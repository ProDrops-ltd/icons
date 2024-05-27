import * as React from "react";
import type { SVGProps } from "react";
const SvgPotrait1 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 12H3m18 0h-4m-7 9h4a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3"
    />
  </svg>
);
export default SvgPotrait1;
