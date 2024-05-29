import * as React from "react";
import type { SVGProps } from "react";
const SvgSpaceKey = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#000"
      d="M21 9c-.6 0-1 .4-1 1v3H4v-3c0-.6-.4-1-1-1s-1 .4-1 1v4c0 .6.4 1 1 1h18c.6 0 1-.4 1-1v-4c0-.6-.4-1-1-1"
    />
  </svg>
);
export default SvgSpaceKey;
