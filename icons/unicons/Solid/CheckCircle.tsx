import * as React from "react";
import type { SVGProps } from "react";
const SvgCheckCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m4.2 8.3-4.8 4.8c-.4.4-1 .4-1.4 0l-2.2-2.2c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l1.5 1.5 4.1-4.1c.4-.4 1-.4 1.4 0s.4 1 0 1.4"
    />
  </svg>
);
export default SvgCheckCircle;
