import * as React from "react";
import type { SVGProps } from "react";
const SvgClapperboard = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M10 17.132v-4.264a1 1 0 0 1 1.555-.832l3.197 2.132a1 1 0 0 1 0 1.664l-3.197 2.131A1 1 0 0 1 10 17.132"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m8.663 2-3 6h1.674l3-6h6.326l-3 6h1.674l2.993-5.987A4 4 0 0 1 22 6v2H2V6a4 4 0 0 1 4-4z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgClapperboard;
