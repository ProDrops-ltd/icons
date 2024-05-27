import * as React from "react";
import type { SVGProps } from "react";
const SvgBattery = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 1.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5zM8 4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBattery;
