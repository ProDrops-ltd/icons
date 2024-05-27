import * as React from "react";
import type { SVGProps } from "react";
const SvgOpenBoxMinus = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20 16.764V8l-8 2-8-2v8.764a2 2 0 0 0 1.106 1.789l6 3a2 2 0 0 0 1.788 0l6-3A2 2 0 0 0 20 16.763"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="m20 6-7.106-3.553a2 2 0 0 0-1.788 0L4 6l8 4z"
      opacity={0.4}
    />
    <path fill="currentColor" d="m20 6-8 4 2 3 8-4zM4 6l8 4-2 3-8-4z" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M14.75 5a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1 0-1.5h4a.75.75 0 0 1 .75.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgOpenBoxMinus;
