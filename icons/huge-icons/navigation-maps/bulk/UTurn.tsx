import * as React from "react";
import type { SVGProps } from "react";
const SvgUTurn = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.973 3.254a4.28 4.28 0 0 1 6.054 0l5.72 5.719a4.28 4.28 0 0 1 0 6.054l-5.72 5.72a4.28 4.28 0 0 1-6.054 0l-5.72-5.72a4.28 4.28 0 0 1 0-6.054z"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M15 16.75a.75.75 0 0 1-.75-.75v-5a2.25 2.25 0 0 0-4.5 0v1.604l.72-.72a.75.75 0 1 1 1.06 1.06l-1.293 1.293a1.75 1.75 0 0 1-2.474 0L6.47 12.944a.75.75 0 1 1 1.06-1.06l.72.72V11a3.75 3.75 0 1 1 7.5 0v5a.75.75 0 0 1-.75.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgUTurn;
