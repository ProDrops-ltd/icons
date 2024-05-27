import * as React from "react";
import type { SVGProps } from "react";
const SvgPlaylist = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 6a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M6 18a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-8a4 4 0 0 0-4-4v8a4 4 0 0 1-4 4z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M9.25 6a.75.75 0 0 1 .75-.75A4.75 4.75 0 0 1 14.75 10a.75.75 0 0 1-1.5 0 3.25 3.25 0 0 0-2.5-3.163V12a2.75 2.75 0 1 1-1.5-2.45z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPlaylist;
