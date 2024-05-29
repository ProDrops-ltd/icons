import * as React from "react";
import type { SVGProps } from "react";
const SvgShare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#000"
      d="M18 14a4 4 0 0 0-3.08 1.48l-5.1-2.35a3.64 3.64 0 0 0 0-2.26l5.1-2.35a4 4 0 1 0-.85-1.81L8.79 9.14a4 4 0 1 0 0 5.72l5.28 2.43A4 4 0 0 0 14 18a4 4 0 1 0 4-4m0-10a2 2 0 1 1 0 4 2 2 0 0 1 0-4M6 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4m12 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4"
    />
  </svg>
);
export default SvgShare;
