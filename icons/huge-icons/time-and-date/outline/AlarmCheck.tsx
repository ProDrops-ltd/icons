import * as React from "react";
import type { SVGProps } from "react";
const SvgAlarmCheck = (props: SVGProps<SVGSVGElement>) => (
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
      d="m9 13 1.753 1.402a1 1 0 0 0 1.377-.122L15 11"
    />
    <circle cx={12} cy={13} r={9} stroke="currentColor" strokeWidth={1.5} />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M16.803 2A12.05 12.05 0 0 1 22 6.364M7.197 2A12.05 12.05 0 0 0 2 6.364"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m21 22-2.243-3M3 22l2.243-3"
    />
  </svg>
);
export default SvgAlarmCheck;
