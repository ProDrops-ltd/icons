import * as React from "react";
import type { SVGProps } from "react";
const SvgCameraOff = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.126 6.5H8a5 5 0 0 0-5 5v4a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5zM12 16.5a3 3 0 0 1-1.283-5.712l3.99 4.007A3 3 0 0 1 12 16.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06l-1.725-1.726A4.98 4.98 0 0 0 21 15.5v-4a5 5 0 0 0-5-5h-.126a4.002 4.002 0 0 0-7.748 0H8q-.213 0-.422.018zM13 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCameraOff;
