import * as React from "react";
import type { SVGProps } from "react";
const SvgBatteryHorizontalCharging = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <rect
      width={12}
      height={18}
      x={20}
      y={6}
      stroke="currentColor"
      strokeWidth={1.5}
      rx={2}
      transform="rotate(90 20 6)"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M22 10v4"
    />
  </svg>
);
export default SvgBatteryHorizontalCharging;
