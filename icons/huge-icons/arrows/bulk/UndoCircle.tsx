import * as React from "react";
import type { SVGProps } from "react";
const SvgUndoCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8.41 6.75a.75.75 0 0 0-.75.75V10a.75.75 0 0 0 .564.727l1.965.5a.75.75 0 1 0 .37-1.454l-.833-.212a3.25 3.25 0 1 1-1 3.252.75.75 0 1 0-1.452.374A4.752 4.752 0 0 0 16.624 12a4.75 4.75 0 0 0-7.465-3.898V7.5a.75.75 0 0 0-.75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgUndoCircle;
