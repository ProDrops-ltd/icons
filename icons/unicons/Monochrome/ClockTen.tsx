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
      fill="#A2A1FF"
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
    />
    <path
      fill="#6563FF"
      d="M13 7a1 1 0 0 0-2 0v3.268l-1.098-.634a1 1 0 0 0-1 1.732l2.598 1.5A1.014 1.014 0 0 0 13 12z"
    />
  </svg>
);
export default SvgClockTen;
