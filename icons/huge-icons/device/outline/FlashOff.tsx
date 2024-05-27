import * as React from "react";
import type { SVGProps } from "react";
const SvgFlashOff = (props: SVGProps<SVGSVGElement>) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m4 4 16 16M10.488 6.488 14 2v8.5h5l-1.976 2.524M8.732 8.732 5 13.5h5V22l5.268-6.732"
    />
  </svg>
);
export default SvgFlashOff;
