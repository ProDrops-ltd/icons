import * as React from "react";
import type { SVGProps } from "react";
const SvgBatteryChargingFull = (props: SVGProps<SVGSVGElement>) => (
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
    <rect
      width={12}
      height={18}
      x={6}
      y={4}
      stroke="currentColor"
      strokeWidth={1.5}
      rx={2}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M10 2h4"
    />
  </svg>
);
export default SvgBatteryChargingFull;
