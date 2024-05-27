import * as React from "react";
import type { SVGProps } from "react";
const SvgSortArrowDown = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 17h9m-9-6h6m-6-6h3M3 14.625l1.505 1.693a2 2 0 0 0 2.99 0L9 14.625M6 17V5"
    />
  </svg>
);
export default SvgSortArrowDown;
