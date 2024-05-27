import * as React from "react";
import type { SVGProps } from "react";
const SvgPencilPaper = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3h-8a3 3 0 0 1-3-3zM2 4.5a1.5 1.5 0 1 1 3 0v13.039a4 4 0 0 1-.672 2.219l-.412.618a.5.5 0 0 1-.832 0l-.412-.618A4 4 0 0 1 2 17.538z"
      opacity={0.4}
    />
    <path fill="currentColor" d="M5 7H2V4.5a1.5 1.5 0 1 1 3 0z" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11.25 8a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75M11.25 12a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75M11.25 16a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPencilPaper;
