import * as React from "react";
import type { SVGProps } from "react";
const SvgTable = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21 2H3c-.6 0-1 .4-1 1v18c0 .6.4 1 1 1h18c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1M10 20v-4h4v4zm0-6v-4h4v4zm-6-4h4v4H4zm6-2V4h4v4zm6 2h4v4h-4zm4-2h-4V4h4zM8 4v4H4V4zM4 16h4v4H4zm12 4v-4h4v4z"
    />
  </svg>
);
export default SvgTable;
