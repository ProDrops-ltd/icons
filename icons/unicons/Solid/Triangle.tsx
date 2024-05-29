import * as React from "react";
import type { SVGProps } from "react";
const SvgTriangle = (props: SVGProps<SVGSVGElement>) => (
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
      d="m21.9 19.3-9-15.6-.3-.3c-.5-.3-1.1-.2-1.4.3l-9 15.6c-.2.1-.2.3-.2.5 0 .6.4 1 1 1h18c.2 0 .3 0 .5-.1.5-.3.6-.9.4-1.4"
    />
  </svg>
);
export default SvgTriangle;
