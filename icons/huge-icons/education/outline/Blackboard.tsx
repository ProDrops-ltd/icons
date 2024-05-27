import * as React from "react";
import type { SVGProps } from "react";
const SvgBlackboard = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22 19H2M12 9H7m14 10V9a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v10zm-4 0v-2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2z"
    />
  </svg>
);
export default SvgBlackboard;
