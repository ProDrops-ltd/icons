import * as React from "react";
import type { SVGProps } from "react";
const SvgColumns = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 3v18c0 .6.4 1 1 1h8V2H3c-.6 0-1 .4-1 1m19-1h-8v20h8c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1"
    />
  </svg>
);
export default SvgColumns;
