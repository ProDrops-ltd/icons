import * as React from "react";
import type { SVGProps } from "react";
const SvgSlack = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 5.5a1.5 1.5 0 0 1 3 0v5a1.5 1.5 0 0 1-3 0z"
    />
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20 10.5a1.5 1.5 0 0 1-1.5 1.5H17v-1.5a1.5 1.5 0 0 1 3 0ZM17 20.5a1.5 1.5 0 0 0-1.5-1.5H14v1.5a1.5 1.5 0 0 0 3 0ZM7 5.5A1.5 1.5 0 0 0 8.5 7H10V5.5a1.5 1.5 0 1 0-3 0ZM4 15.5A1.5 1.5 0 0 1 5.5 14H7v1.5a1.5 1.5 0 0 1-3 0Z"
    />
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M9 15.5a1.5 1.5 0 0 1 3 0v5a1.5 1.5 0 0 1-3 0zM8.5 9a1.5 1.5 0 0 1 0 3h-5a1.5 1.5 0 1 1 0-3zM20.5 14a1.5 1.5 0 0 1 0 3h-5a1.5 1.5 0 0 1 0-3z"
    />
  </svg>
);
export default SvgSlack;
