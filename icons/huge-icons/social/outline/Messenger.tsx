import * as React from "react";
import type { SVGProps } from "react";
const SvgMessenger = (props: SVGProps<SVGSVGElement>) => (
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
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.511.335 2.945.936 4.229l-.713 4.396a1 1 0 0 0 1.152 1.146l4.355-.726A10 10 0 0 0 12 22Z"
    />
    <path fill="currentColor" d="m10 9-4 6 4-3 4 3 4-6-4 3z" />
  </svg>
);
export default SvgMessenger;
