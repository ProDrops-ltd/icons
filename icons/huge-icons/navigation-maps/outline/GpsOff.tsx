import * as React from "react";
import type { SVGProps } from "react";
const SvgGpsOff = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 26 26"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m13.063 5 .015-2M12.922 23l.015-2M21 13.063l2 .015M3 12.922l2 .015M4.07 3.93l17.86 18.14M9.764 5.681A8 8 0 0 1 20.267 16.35M7.387 7.299A8 8 0 1 0 18.613 18.7"
    />
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M15.1 15.142a3 3 0 1 1-4.2-4.286"
    />
  </svg>
);
export default SvgGpsOff;
