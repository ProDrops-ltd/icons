import * as React from "react";
import type { SVGProps } from "react";
const SvgMoneyUser = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 8a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"
      opacity={0.4}
    />
    <circle
      cx={1}
      cy={1}
      r={1}
      fill="currentColor"
      transform="matrix(1 0 0 -1 5 9)"
    />
    <circle
      cx={2}
      cy={2}
      r={2}
      fill="currentColor"
      transform="matrix(1 0 0 -1 10 14)"
    />
    <circle
      cx={2}
      cy={2}
      r={2}
      fill="currentColor"
      transform="matrix(1 0 0 -1 17 18)"
    />
    <path
      fill="currentColor"
      d="M19 18c1.282 0 2.401.804 3 2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1c.599-1.196 1.718-2 3-2"
    />
  </svg>
);
export default SvgMoneyUser;
