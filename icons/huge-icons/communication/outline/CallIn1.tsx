import * as React from "react";
import type { SVGProps } from "react";
const SvgCallIn1 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19 9h-2a2 2 0 0 1-2-2V5m6-2-5 5m5 9.354V19a2 2 0 0 1-2 2C10.163 21 3 13.837 3 5a2 2 0 0 1 2-2h1.646a2 2 0 0 1 1.857 1.257l.814 2.034a2 2 0 0 1-.963 2.532L8 9s.5 2.5 2.5 4.5S15 16 15 16l.177-.354a2 2 0 0 1 2.532-.963l2.034.814A2 2 0 0 1 21 17.354"
    />
  </svg>
);
export default SvgCallIn1;
