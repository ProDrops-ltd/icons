import * as React from "react";
import type { SVGProps } from "react";
const SvgPackagingArrowDown = (props: SVGProps<SVGSVGElement>) => (
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
      d="m14 15.414-1.293 1.293a1 1 0 0 1-1.414 0L10 15.414M12 11v5.414"
    />
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M22 18V8.403a4 4 0 0 0-.876-2.499L19.2 3.501A4 4 0 0 0 16.078 2H7.923a4 4 0 0 0-3.124 1.501L2.877 5.904A4 4 0 0 0 2 8.404V18a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 7h18"
    />
  </svg>
);
export default SvgPackagingArrowDown;
