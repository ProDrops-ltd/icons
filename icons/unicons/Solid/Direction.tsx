import * as React from "react";
import type { SVGProps } from "react";
const SvgDirection = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.3 14.8 12 17.1l-2.3-2.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l3 3c.2.2.4.3.7.3s.5-.1.7-.3l3-3c.4-.4.4-1 0-1.4s-1-.4-1.4 0m-4.6-4.6L12 7.9l2.3 2.3c.2.2.4.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4l-3-3c-.4-.4-1-.4-1.4 0l-3 3c-.4.4-.4 1 0 1.4s1 .4 1.4 0"
    />
  </svg>
);
export default SvgDirection;
