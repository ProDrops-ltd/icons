import * as React from "react";
import type { SVGProps } from "react";
const SvgTemperatureCold = (props: SVGProps<SVGSVGElement>) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 22a5 5 0 0 0 3-9V5a3 3 0 1 0-6 0v8a5 5 0 0 0 3 9Z"
    />
  </svg>
);
export default SvgTemperatureCold;
