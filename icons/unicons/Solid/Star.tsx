import * as React from "react";
import type { SVGProps } from "react";
const SvgStar = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22 10.1c.1-.5-.3-1.1-.8-1.1l-5.7-.8L12.9 3c-.1-.2-.2-.3-.4-.4-.5-.3-1.1-.1-1.4.4L8.6 8.2 2.9 9q-.45 0-.6.3c-.4.4-.4 1 0 1.4l4.1 4-1 5.7c0 .2 0 .4.1.6.3.5.9.7 1.4.4l5.1-2.7 5.1 2.7c.1.1.3.1.5.1h.2c.5-.1.9-.6.8-1.2l-1-5.7 4.1-4c.2-.1.3-.3.3-.5"
    />
  </svg>
);
export default SvgStar;