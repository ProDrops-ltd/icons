import * as React from "react";
import type { SVGProps } from "react";
const SvgAlignTop = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 19.75a.75.75 0 0 1-.75-.75v-8.19l-.72.72a.75.75 0 0 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0l2 2a.75.75 0 1 1-1.06 1.06l-.72-.72V19a.75.75 0 0 1-.75.75M16 19.75a.75.75 0 0 1-.75-.75v-8.19l-.72.72a.75.75 0 1 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0l2 2a.75.75 0 1 1-1.06 1.06l-.72-.72V19a.75.75 0 0 1-.75.75"
      clipRule="evenodd"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4.25 5c0 .414.336.75.75.75h14a.75.75 0 0 0 0-1.5H5a.75.75 0 0 0-.75.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgAlignTop;
