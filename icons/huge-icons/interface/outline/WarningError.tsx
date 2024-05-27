import * as React from "react";
import type { SVGProps } from "react";
const SvgWarningError = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={12} cy={17} r={1} fill="currentColor" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 9v5m-7.672 7h15.344c1.773 0 2.893-1.857 2.032-3.368L14.032 4.166c-.886-1.555-3.178-1.555-4.064 0L2.296 17.632C1.436 19.143 2.556 21 4.328 21"
    />
  </svg>
);
export default SvgWarningError;
