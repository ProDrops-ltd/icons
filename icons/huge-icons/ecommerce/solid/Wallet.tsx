import * as React from "react";
import type { SVGProps } from "react";
const SvgWallet = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 7a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v1.5h-4a3.5 3.5 0 1 0 0 7h4V17a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4zm16 7h4v-4h-4a2 2 0 1 0 0 4"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgWallet;
