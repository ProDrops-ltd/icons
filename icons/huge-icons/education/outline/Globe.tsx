import * as React from "react";
import type { SVGProps } from "react";
const SvgGlobe = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M20.535 16.107a10 10 0 0 1-7.07 2.928m0 0a9.999 9.999 0 0 1-7.072-17.07m7.071 17.07v3m0 0h-3m3 0h3m4-13a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
    />
  </svg>
);
export default SvgGlobe;
