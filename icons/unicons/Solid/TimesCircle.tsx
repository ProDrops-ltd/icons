import * as React from "react";
import type { SVGProps } from "react";
const SvgTimesCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m3.7 12.3c.4.4.4 1 0 1.4s-1 .4-1.4 0L12 13.4l-2.3 2.3c-.4.4-1 .4-1.4 0s-.4-1 0-1.4l2.3-2.3-2.3-2.3c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l2.3 2.3 2.3-2.3c.4-.4 1-.4 1.4 0s.4 1 0 1.4L13.4 12z"
    />
  </svg>
);
export default SvgTimesCircle;
