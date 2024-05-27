import * as React from "react";
import type { SVGProps } from "react";
const SvgHalfMoonPhase = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m7.5-10c0 3.866-3.634 7.5-7.5 7.5v-15c3.866 0 7.5 3.634 7.5 7.5"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgHalfMoonPhase;
