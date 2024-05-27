import * as React from "react";
import type { SVGProps } from "react";
const SvgView = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21.13 9.853a3.085 3.085 0 0 1 0 4.294C19.174 16.205 15.816 19 12 19s-7.175-2.795-9.13-4.853a3.085 3.085 0 0 1 0-4.294C4.825 7.795 8.184 5 12 5s7.174 2.795 9.13 4.853Z"
    />
    <circle cx={12} cy={12} r={3} stroke="currentColor" strokeWidth={1.5} />
  </svg>
);
export default SvgView;
