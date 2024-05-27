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
      d="M12 2h6a4 4 0 0 1 3.71 2.5H8.29A4 4 0 0 1 12 2M2 12v4h4a2 2 0 1 0 0-4zm20-6H6a4 4 0 0 0-4 4v.5h4a3.5 3.5 0 1 1 0 7H2v.5a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgWallet;
