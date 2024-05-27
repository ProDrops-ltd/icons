import * as React from "react";
import type { SVGProps } from "react";
const SvgAlarm = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 8v5l3 2m1.803-13A12.05 12.05 0 0 1 22 6.364m-20 0A12.05 12.05 0 0 1 7.197 2M21 22l-2.243-3M3 22l2.243-3M21 13a9 9 0 1 1-18 0 9 9 0 0 1 18 0"
    />
  </svg>
);
export default SvgAlarm;
