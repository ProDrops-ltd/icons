import * as React from "react";
import type { SVGProps } from "react";
const SvgEqualizer = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 6H6V3a1 1 0 0 0-2 0v3H3a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2m-2 4a1 1 0 0 0-1 1v10a1 1 0 1 0 2 0V11a1 1 0 0 0-1-1m7 8a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1m9-8h-1V3a1 1 0 0 0-2 0v7h-1a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2m-2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1m-5 0h-1V3a1 1 0 0 0-2 0v11h-1a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2"
    />
  </svg>
);
export default SvgEqualizer;
