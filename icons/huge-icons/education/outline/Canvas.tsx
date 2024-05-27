import * as React from "react";
import type { SVGProps } from "react";
const SvgCanvas = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 4V2m0 19v-3m-6 4 2-4m10 4-2-4m-9 0h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3Z"
    />
  </svg>
);
export default SvgCanvas;
