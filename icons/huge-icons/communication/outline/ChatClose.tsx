import * as React from "react";
import type { SVGProps } from "react";
const SvgChatClose = (props: SVGProps<SVGSVGElement>) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10 10 4 4m0-4-4 4m1-11h2a9 9 0 1 1 0 18H6a4 4 0 0 1-4-4v-5a9 9 0 0 1 9-9"
    />
  </svg>
);
export default SvgChatClose;
