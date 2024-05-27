import * as React from "react";
import type { SVGProps } from "react";
const SvgBagRemove = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 6a4 4 0 0 0-8 0"
    />
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.562 9.504A4 4 0 0 1 8.532 6h6.937a4 4 0 0 1 3.969 3.504l1 8A4 4 0 0 1 16.468 22H7.532a4 4 0 0 1-3.969-4.496z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.879 11.879 4.242 4.242M14.121 11.879 9.88 16.12"
    />
  </svg>
);
export default SvgBagRemove;
