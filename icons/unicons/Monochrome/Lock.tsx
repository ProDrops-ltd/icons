import * as React from "react";
import type { SVGProps } from "react";
const SvgLock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#A2A1FF"
      d="M16 11H8a1 1 0 0 1-1-1V7a5 5 0 1 1 10 0v3a1 1 0 0 1-1 1M9 9h6V7a3 3 0 0 0-6 0z"
    />
    <path
      fill="#6563FF"
      d="M17 9H7a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3"
    />
  </svg>
);
export default SvgLock;
