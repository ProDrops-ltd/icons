import * as React from "react";
import type { SVGProps } from "react";
const SvgStrikethrough1 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 5h12M4 12h16"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12.75 5a.75.75 0 0 0-1.5 0v5.25h1.5zm0 6.75h-1.5V19a.75.75 0 0 0 1.5 0z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgStrikethrough1;
