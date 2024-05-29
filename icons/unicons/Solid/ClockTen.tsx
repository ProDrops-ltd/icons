import * as React from "react";
import type { SVGProps } from "react";
const SvgClockTen = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m1 10c0 .6-.4 1-1 1-.2 0-.3 0-.5-.1l-2.6-1.5c-.5-.3-.6-.9-.4-1.4.3-.5.9-.6 1.4-.4l1.1.6V7c0-.6.4-1 1-1s1 .4 1 1z"
    />
  </svg>
);
export default SvgClockTen;
