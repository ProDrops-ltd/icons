import * as React from "react";
import type { SVGProps } from "react";
const SvgCoin = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20 6a2 2 0 0 0-2-2h-8a2 2 0 0 0-.001 4H6a2 2 0 1 0 0 4h3.998A2 2 0 0 0 10 16H7a2 2 0 1 0 0 4h8a2 2 0 1 0 0-4h3a2 2 0 1 0 0-4h-3.998a2 2 0 0 0-.001-4H18a2 2 0 0 0 2-2"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCoin;
