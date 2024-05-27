import * as React from "react";
import type { SVGProps } from "react";
const SvgInstagram = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"
      opacity={0.4}
    />
    <circle cx={18} cy={6} r={1} fill="currentColor" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10m0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgInstagram;
