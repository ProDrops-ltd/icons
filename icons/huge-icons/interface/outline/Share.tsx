import * as React from "react";
import type { SVGProps } from "react";
const SvgShare = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.631 10.434a3.5 3.5 0 1 0 0 3.132m0-3.132C8.867 10.906 9 11.437 9 12s-.133 1.095-.369 1.566m0-3.132 6.738-3.368m-6.738 6.5 6.738 3.368m0-9.868a3.5 3.5 0 1 0 6.26-3.132 3.5 3.5 0 0 0-6.26 3.132Zm0 9.868a3.5 3.5 0 1 0 6.262 3.131 3.5 3.5 0 0 0-6.262-3.13Z"
    />
  </svg>
);
export default SvgShare;
