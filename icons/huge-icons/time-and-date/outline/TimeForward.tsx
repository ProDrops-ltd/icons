import * as React from "react";
import type { SVGProps } from "react";
const SvgTimeForward = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="M22 12V6a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h16"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m22 12-2-2M12 6v4.5m-1.5 3L9 15"
    />
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M13.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
    />
  </svg>
);
export default SvgTimeForward;
