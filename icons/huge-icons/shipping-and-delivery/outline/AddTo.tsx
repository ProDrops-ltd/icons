import * as React from "react";
import type { SVGProps } from "react";
const SvgAddTo = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 12v7a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-7M12 8h7.5a1 1 0 0 1 .8.4l1.5 2A1 1 0 0 1 21 12h-5.5a1 1 0 0 1-.8-.4zM12 8H4.5a1 1 0 0 0-.8.4l-1.5 2A1 1 0 0 0 3 12h5.5a1 1 0 0 0 .8-.4z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m14 4-1.293 1.293a1 1 0 0 1-1.414 0L10 4m2-2v3"
    />
  </svg>
);
export default SvgAddTo;
