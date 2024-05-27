import * as React from "react";
import type { SVGProps } from "react";
const SvgOpenBoxArrowUp = (props: SVGProps<SVGSVGElement>) => (
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
      d="m14 3.586-1.293-1.293a1 1 0 0 0-1.414 0L10 3.586M12 7V2.586"
    />
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M4 10v6.764a2 2 0 0 0 1.106 1.789l6 3a2 2 0 0 0 1.788 0l6-3A2 2 0 0 0 20 16.763V10"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m18 5 2 1-8 4-8-4 2-1"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m20 6-8 4 2 3 8-4zM4 6l8 4-2 3-8-4z"
    />
  </svg>
);
export default SvgOpenBoxArrowUp;
