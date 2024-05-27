import * as React from "react";
import type { SVGProps } from "react";
const SvgWalletUser = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22 6H6a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4z"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M22 6a4 4 0 0 0-4-4h-6a4 4 0 0 0-4 4zM2 12v4h4a2 2 0 1 0 0-4z"
    />
    <circle
      cx={2}
      cy={2}
      r={2}
      fill="currentColor"
      transform="matrix(1 0 0 -1 17 19)"
    />
    <path
      fill="currentColor"
      d="M19 19c1.282 0 2.401.804 3 2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1c.599-1.196 1.718-2 3-2"
    />
  </svg>
);
export default SvgWalletUser;
