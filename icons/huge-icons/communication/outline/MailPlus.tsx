import * as React from "react";
import type { SVGProps } from "react";
const SvgMailPlus = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20 3v4m2-2h-4M6 12l2.8 2.1a2 2 0 0 0 2.4 0L14 12m-9 9h10a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3"
    />
  </svg>
);
export default SvgMailPlus;
