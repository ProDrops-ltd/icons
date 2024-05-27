import * as React from "react";
import type { SVGProps } from "react";
const SvgSwitch = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22.75 12A6.75 6.75 0 0 0 16 5.25H8a6.75 6.75 0 0 0 0 13.5h8A6.75 6.75 0 0 0 22.75 12m-9.657 5.25A6 6 0 0 1 10 12a6 6 0 0 1 3.093-5.25H8a5.25 5.25 0 1 0 0 10.5z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSwitch;
