import * as React from "react";
import type { SVGProps } from "react";
const SvgWatch = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17 4v1.125A8.46 8.46 0 0 0 12 3.5a8.46 8.46 0 0 0-5 1.625V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2m-5 16.5a8.46 8.46 0 0 1-5-1.625V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1.125a8.46 8.46 0 0 1-5 1.625m7-8.5a7 7 0 1 1-14 0 7 7 0 0 1 14 0m-7-3.75a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.415.67l-2 1a.75.75 0 1 1-.67-1.34l1.585-.793V9a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgWatch;
