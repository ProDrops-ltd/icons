import * as React from "react";
import type { SVGProps } from "react";
const SvgTable = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 3h5a4 4 0 0 1 4 4v1.824M12 3H7a4 4 0 0 0-4 4v1.824M12 3v18m0 0H7a4 4 0 0 1-4-4v-1.823M12 21h5a4 4 0 0 0 4-4v-1.823m-18 0h18m-18 0V8.824m18 6.353V8.824m-18 0h18"
    />
  </svg>
);
export default SvgTable;
