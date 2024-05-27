import * as React from "react";
import type { SVGProps } from "react";
const SvgShutDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M16 2.832c3.532 1.543 6 5.067 6 9.168 0 5.523-4.477 10-10 10S2 17.523 2 12c0-4.1 2.468-7.625 6-9.168"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 2v4"
    />
  </svg>
);
export default SvgShutDown;
