import * as React from "react";
import type { SVGProps } from "react";
const SvgLayout4 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="currentColor" d="M6 22a4 4 0 0 1-4-4v-6h10v10z" />
    <path
      fill="currentColor"
      d="M18 22a4 4 0 0 0 4-4v-6H12v10z"
      opacity={0.4}
    />
    <path fill="currentColor" d="M18 2a4 4 0 0 1 4 4v6H12V2z" />
    <path fill="currentColor" d="M6 2a4 4 0 0 0-4 4v6h10V2z" opacity={0.4} />
  </svg>
);
export default SvgLayout4;
