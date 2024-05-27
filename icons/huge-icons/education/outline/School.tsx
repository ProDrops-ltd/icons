import * as React from "react";
import type { SVGProps } from "react";
const SvgSchool = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9 18a3 3 0 1 1 6 0v4H9z"
    />
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M2 8a2 2 0 0 1 2-2h2.298a2 2 0 0 0 1.25-.438l3.203-2.563a2 2 0 0 1 2.498 0l3.203 2.563a2 2 0 0 0 1.25.438H20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z"
    />
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M14 10a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z"
    />
  </svg>
);
export default SvgSchool;
