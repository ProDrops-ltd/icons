import * as React from "react";
import type { SVGProps } from "react";
const SvgVibrateMode = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <rect
      width={8}
      height={14}
      x={8}
      y={5}
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
      rx={2}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19 10v4M22 9v6M5 14v-4M2 15V9"
    />
  </svg>
);
export default SvgVibrateMode;
