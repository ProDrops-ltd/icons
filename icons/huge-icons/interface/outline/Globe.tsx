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
      strokeWidth={1.5}
      d="M22 12c0 5.523-4.477 10-10 10m10-10c0-5.523-4.477-10-10-10m10 10c0-1.657-4.477-3-10-3S2 10.343 2 12m20 0c0 1.657-4.477 3-10 3S2 13.657 2 12m10 10C6.477 22 2 17.523 2 12m10 10c2.21 0 4-4.477 4-10S14.21 2 12 2m0 20c-2.21 0-4-4.477-4-10S9.79 2 12 2M2 12C2 6.477 6.477 2 12 2"
    />
  </svg>
);
export default SvgGlobe;
