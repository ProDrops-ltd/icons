import * as React from "react";
import type { SVGProps } from "react";
const SvgGraphicEq = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="M12 4v16M8 7v10M16 7v10M4 10v4M20 10v4"
    />
  </svg>
);
export default SvgGraphicEq;
