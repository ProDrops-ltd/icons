import * as React from "react";
import type { SVGProps } from "react";
const SvgWallet1 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 6h16a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M2 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4zM22 12v4h-4a2 2 0 1 1 0-4z"
    />
  </svg>
);
export default SvgWallet1;
