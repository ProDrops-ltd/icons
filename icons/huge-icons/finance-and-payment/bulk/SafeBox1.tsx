import * as React from "react";
import type { SVGProps } from "react";
const SvgSafeBox1 = (props: SVGProps<SVGSVGElement>) => (
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
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8 6h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2m4 4a2 2 0 0 1 1.855 1.25H16a.75.75 0 0 1 0 1.5h-2.145A2 2 0 1 1 12 10"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSafeBox1;
