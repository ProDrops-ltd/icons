import * as React from "react";
import type { SVGProps } from "react";
const SvgChatNegative = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.125 12h5.75m-3.459-9h1.167a9 9 0 0 1 0 18H6.417a4 4 0 0 1-4-4v-5a9 9 0 0 1 9-9"
    />
  </svg>
);
export default SvgChatNegative;
