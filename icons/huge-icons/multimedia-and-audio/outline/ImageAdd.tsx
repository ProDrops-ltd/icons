import * as React from "react";
import type { SVGProps } from "react";
const SvgImageAdd = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4v-8m-3-8v6m3-3h-6m6 9-2.939-2.116a4 4 0 0 0-5.013.273l-4.096 3.686a4 4 0 0 1-5.013.273L2 14m9-5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
    />
  </svg>
);
export default SvgImageAdd;
