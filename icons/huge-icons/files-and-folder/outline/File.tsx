import * as React from "react";
import type { SVGProps } from "react";
const SvgFile = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20 22H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v3m2 14a2 2 0 0 1-2-2V8m2 14a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h-2M6 7h8m-8 5h8m-8 5h4"
    />
  </svg>
);
export default SvgFile;
