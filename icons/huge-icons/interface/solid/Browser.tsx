import * as React from "react";
import type { SVGProps } from "react";
const SvgBrowser = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 9.5V18a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V9.5zM2 8h20V6a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4zm17-3a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBrowser;
