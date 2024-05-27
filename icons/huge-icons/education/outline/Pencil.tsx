import * as React from "react";
import type { SVGProps } from "react";
const SvgPencil = (props: SVGProps<SVGSVGElement>) => (
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
      d="m14.387 5.831 3.782 3.783M3 21l3.673-.7a3.95 3.95 0 0 0 2.055-1.087L20.184 7.758a2.787 2.787 0 1 0-3.942-3.942L4.788 15.272c-.56.56-.94 1.277-1.088 2.055z"
    />
  </svg>
);
export default SvgPencil;
