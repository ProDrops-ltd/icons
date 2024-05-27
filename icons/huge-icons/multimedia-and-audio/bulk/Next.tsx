import * as React from "react";
import type { SVGProps } from "react";
const SvgNext = (props: SVGProps<SVGSVGElement>) => (
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
      d="m12.039 13.728-6.031 3.517C4.674 18.023 3 17.061 3 15.518V8.482c0-1.544 1.674-2.505 3.008-1.728l6.03 3.518c1.323.772 1.323 2.684 0 3.455"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="m20.039 13.728-6.031 3.517c-1.334.778-3.008-.184-3.008-1.727V8.482c0-1.544 1.674-2.505 3.008-1.728l6.03 3.518c1.323.772 1.323 2.684 0 3.455"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M21 6.75a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0v-9a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgNext;
