import * as React from "react";
import type { SVGProps } from "react";
const SvgCameraVideo = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="M2 8a4 4 0 0 1 4-4h7a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4zM17 9.333l1.54-1.643C19.782 6.367 22 7.244 22 9.058v5.884c0 1.814-2.219 2.691-3.46 1.368L17 14.667z"
    />
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M13 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
    />
  </svg>
);
export default SvgCameraVideo;
