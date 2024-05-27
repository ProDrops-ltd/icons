import * as React from "react";
import type { SVGProps } from "react";
const SvgFileVideo = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 18V6a4 4 0 0 1 4-4h6l8 8v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M13 6V2l8 8h-4a4 4 0 0 1-4-4M10 17.132v-4.264a1 1 0 0 1 1.555-.832l3.197 2.132a1 1 0 0 1 0 1.664l-3.197 2.131A1 1 0 0 1 10 17.132"
    />
  </svg>
);
export default SvgFileVideo;
