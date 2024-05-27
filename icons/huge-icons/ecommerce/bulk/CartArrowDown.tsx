import * as React from "react";
import type { SVGProps } from "react";
const SvgCartArrowDown = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.75 1.25a.75.75 0 0 0 0 1.5h2C5.44 2.75 6 3.31 6 4h1.5a2.75 2.75 0 0 0-2.75-2.75z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M6 4h12a4 4 0 0 1 4 4v5a4 4 0 0 1-4 4h-8a4 4 0 0 1-4-4z"
      opacity={0.4}
    />
    <circle cx={9.5} cy={20.5} r={1.5} fill="currentColor" />
    <circle cx={18.5} cy={20.5} r={1.5} fill="currentColor" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m13.25 12.19-.72-.72a.75.75 0 1 0-1.06 1.06l1.293 1.293a1.75 1.75 0 0 0 2.474 0l1.293-1.293a.75.75 0 0 0-1.06-1.06l-.72.72V8a.75.75 0 0 0-1.5 0z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCartArrowDown;
