import * as React from "react";
import type { SVGProps } from "react";
const SvgIpod = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4zm4.25 6a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIpod;
