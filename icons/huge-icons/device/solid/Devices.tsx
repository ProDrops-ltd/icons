import * as React from "react";
import type { SVGProps } from "react";
const SvgDevices = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18.5 4H6a2 2 0 0 0-2 2v9.5h8.5v-8a2 2 0 0 1 2-2H20A1.5 1.5 0 0 0 18.5 4M14 9a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2zM3.5 17h9v3h-9a1.5 1.5 0 0 1 0-3"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgDevices;
