import * as React from "react";
import type { SVGProps } from "react";
const SvgListViewRectangle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3 5.25A1.75 1.75 0 0 0 1.25 7v2c0 .966.784 1.75 1.75 1.75h2A1.75 1.75 0 0 0 6.75 9V7A1.75 1.75 0 0 0 5 5.25zm0 8A1.75 1.75 0 0 0 1.25 15v2c0 .966.784 1.75 1.75 1.75h2A1.75 1.75 0 0 0 6.75 17v-2A1.75 1.75 0 0 0 5 13.25zM9.25 6a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6A.75.75 0 0 1 9.25 6m.75 7.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5zM9.25 10a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5H10a.75.75 0 0 1-.75-.75m.75 7.25a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgListViewRectangle;
