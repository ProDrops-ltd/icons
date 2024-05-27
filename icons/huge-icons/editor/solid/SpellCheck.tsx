import * as React from "react";
import type { SVGProps } from "react";
const SvgSpellCheck = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9 3.25a.75.75 0 0 1 .693.462l5 12a.75.75 0 0 1-1.385.576l-1.474-3.538H6.167l-1.474 3.538a.75.75 0 0 1-1.385-.577l5-12A.75.75 0 0 1 9 3.25m0 2.7 2.209 5.3H6.792zm11.545 8.565a.75.75 0 1 0-1.09-1.03l-4.996 5.29a.25.25 0 0 1-.35.014l-2.607-2.347a.75.75 0 1 0-1.004 1.116l2.608 2.346a1.75 1.75 0 0 0 2.443-.099z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSpellCheck;
