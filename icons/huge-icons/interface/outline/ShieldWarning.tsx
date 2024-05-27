import * as React from "react";
import type { SVGProps } from "react";
const SvgShieldWarning = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle
      cx={12}
      cy={17}
      r={1}
      fill="currentColor"
      transform="rotate(-180 12 17)"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 14V7M5.332 4.71l5.039-2.346a3.86 3.86 0 0 1 3.275 0l5.019 2.337a4.05 4.05 0 0 1 2.328 3.9c-.395 6.44-2.152 9.353-6.903 12.731a3.575 3.575 0 0 1-4.162 0C5.19 17.972 3.368 15.1 3.006 8.577A4.04 4.04 0 0 1 5.332 4.71"
    />
  </svg>
);
export default SvgShieldWarning;
