import * as React from "react";
import type { SVGProps } from "react";
const SvgTaskCheck = (props: SVGProps<SVGSVGElement>) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 18V6a4 4 0 0 1 4-4h5.343a4 4 0 0 1 2.829 1.172l4.656 4.656A4 4 0 0 1 21 10.657V18a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"
    />
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14 2v3a4 4 0 0 0 4 4h3"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9 14 1.753 1.402a1 1 0 0 0 1.377-.122L15 12"
    />
  </svg>
);
export default SvgTaskCheck;
