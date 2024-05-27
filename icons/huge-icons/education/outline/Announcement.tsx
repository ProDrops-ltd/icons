import * as React from "react";
import type { SVGProps } from "react";
const SvgAnnouncement = (props: SVGProps<SVGSVGElement>) => (
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
      d="m14.16 15.928 2.147 3.719a1.5 1.5 0 1 1-2.598 1.5l-2.653-4.596M19.454 4.83l.366-1.366m1.634 4.83 1.366.366m-14.722 8.5 10.619-2.431a2 2 0 0 0 1.286-2.95L15.71 4.345a2 2 0 0 0-3.197-.361l-7.415 7.98zm-2.75-4.763 2.5 4.33a1.5 1.5 0 1 1-2.598 1.5l-2.5-4.33a1.5 1.5 0 1 1 2.598-1.5"
    />
  </svg>
);
export default SvgAnnouncement;
