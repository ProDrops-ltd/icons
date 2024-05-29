import * as React from "react";
import type { SVGProps } from "react";
const SvgClockFive = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#6563FF"
      d="M12 6a1.003 1.003 0 0 1 1 1v4.73l1.6 2.77a.999.999 0 1 1-1.73 1l-1.69-2.93A1 1 0 0 1 11 12V7a1.003 1.003 0 0 1 1-1"
    />
    <path
      fill="#A2A1FF"
      d="M2 12a10 10 0 1 0 20 0 10 10 0 0 0-20 0m9-5a1 1 0 0 1 2 0v4.73l1.6 2.77a.999.999 0 1 1-1.73 1l-1.69-2.93A1 1 0 0 1 11 12z"
    />
  </svg>
);
export default SvgClockFive;
