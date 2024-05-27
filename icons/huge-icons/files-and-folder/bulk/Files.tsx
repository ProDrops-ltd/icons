import * as React from "react";
import type { SVGProps } from "react";
const SvgFiles = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 6v8a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7 10v8a4 4 0 0 0 4 4h3.937a.5.5 0 0 0 .5-.5v-2.044a3.17 3.17 0 0 1 3.157-3.157c.555-.006 1.219-.01 1.907-.012a.5.5 0 0 0 .499-.5V10a4 4 0 0 0-4-4h-6a4 4 0 0 0-4 4m9.26 11.541c0 .41.497.615.782.319l2.513-2.614 1.323-1.375a.454.454 0 0 0-.327-.77c-.783-.002-1.705 0-2.37.008a1.93 1.93 0 0 0-1.921 1.92z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFiles;
