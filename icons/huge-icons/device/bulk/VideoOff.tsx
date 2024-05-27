import * as React from "react";
import type { SVGProps } from "react";
const SvgVideoOff = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 9a4 4 0 0 1 4-4h7a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M13 5H5.82l11.04 11.043c.027-.105.14-.39.14-1.043V9a4 4 0 0 0-4-4M17 9.334l1.54-1.644C19.782 6.367 22 7.245 22 9.058v5.885c0 1.813-2.219 2.69-3.46 1.368L17 14.667z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M1.22 1.47a.75.75 0 0 0 0 1.06l20 20a.75.75 0 1 0 1.06-1.06l-20-20a.75.75 0 0 0-1.06 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgVideoOff;
