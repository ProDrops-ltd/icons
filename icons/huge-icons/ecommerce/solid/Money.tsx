import * as React from "react";
import type { SVGProps } from "react";
const SvgMoney = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 4a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4zm6 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4M6.5 7.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0m12 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-12 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m12 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMoney;
