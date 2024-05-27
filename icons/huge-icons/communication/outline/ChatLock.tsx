import * as React from "react";
import type { SVGProps } from "react";
const SvgChatLock = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 11v-1a2 2 0 1 1 4 0v1m-4 0h4m-4 0a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2m-3-8h2a9 9 0 1 1 0 18H6a4 4 0 0 1-4-4v-5a9 9 0 0 1 9-9Z"
    />
  </svg>
);
export default SvgChatLock;
