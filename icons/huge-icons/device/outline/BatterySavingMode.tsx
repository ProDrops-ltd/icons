import * as React from "react";
import type { SVGProps } from "react";
const SvgBatterySavingMode = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 2h4M12 10v6M15 13H9"
    />
  </svg>
);
export default SvgBatterySavingMode;
