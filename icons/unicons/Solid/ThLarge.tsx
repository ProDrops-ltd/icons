import * as React from "react";
import type { SVGProps } from "react";
const SvgThLarge = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20 3H4c-.6 0-1 .4-1 1v16c0 .6.4 1 1 1h16c.6 0 1-.4 1-1V4c0-.6-.4-1-1-1m-1 8h-6V5h6zm-8-6v6H5V5zm-6 8h6v6H5zm8 6v-6h6v6z"
    />
  </svg>
);
export default SvgThLarge;
