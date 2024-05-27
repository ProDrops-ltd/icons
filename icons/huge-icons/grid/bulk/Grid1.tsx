import * as React from "react";
import type { SVGProps } from "react";
const SvgGrid1 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 4a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z"
    />
    <path
      fill="currentColor"
      d="M2 13a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zM13 4a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2z"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M13 17a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2z"
    />
  </svg>
);
export default SvgGrid1;
