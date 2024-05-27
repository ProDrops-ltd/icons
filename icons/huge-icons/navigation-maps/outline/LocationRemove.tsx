import * as React from "react";
import type { SVGProps } from "react";
const SvgLocationRemove = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={12} cy={11} r={5} stroke="currentColor" strokeWidth={1.5} />
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M21 10.889C21 15.799 15.375 22 12 22s-9-6.202-9-11.111S7.03 2 12 2s9 3.98 9 8.889Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m13.414 9.586-2.828 2.828M10.586 9.586l2.828 2.828"
    />
  </svg>
);
export default SvgLocationRemove;
