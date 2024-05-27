import * as React from "react";
import type { SVGProps } from "react";
const SvgVideo = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 9a4 4 0 0 1 4-4h7a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="m17 9.334 1.54-1.644C19.782 6.367 22 7.245 22 9.058v5.885c0 1.813-2.219 2.69-3.46 1.368L17 14.667zM14 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
    />
  </svg>
);
export default SvgVideo;
