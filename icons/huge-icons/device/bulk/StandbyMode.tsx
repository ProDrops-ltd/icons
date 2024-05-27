import * as React from "react";
import type { SVGProps } from "react";
const SvgStandbyMode = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10"
      opacity={0.4}
    />
    <path fill="currentColor" d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0" />
  </svg>
);
export default SvgStandbyMode;
