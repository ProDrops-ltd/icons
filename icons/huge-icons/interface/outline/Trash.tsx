import * as React from "react";
import type { SVGProps } from "react";
const SvgTrash = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 8v10a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V8m-5 3v6m-4-6v6m6-12-1.406-2.11A2 2 0 0 0 12.93 2h-1.86a2 2 0 0 0-1.664.89L8 5m8 0H8m8 0h5M8 5H3"
    />
  </svg>
);
export default SvgTrash;
