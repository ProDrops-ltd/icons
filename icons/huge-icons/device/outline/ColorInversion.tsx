import * as React from "react";
import type { SVGProps } from "react";
const SvgColorInversion = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="M3 13.111C3 8.201 8.625 2 12 2s9 6.202 9 11.111S16.97 22 12 22s-9-3.98-9-8.889Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 2v20"
    />
  </svg>
);
export default SvgColorInversion;
