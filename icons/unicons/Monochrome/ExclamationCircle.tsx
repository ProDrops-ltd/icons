import * as React from "react";
import type { SVGProps } from "react";
const SvgExclamationCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2M12 13a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1"
    />
  </svg>
);
export default SvgExclamationCircle;
