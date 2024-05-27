import * as React from "react";
import type { SVGProps } from "react";
const SvgPackagingSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={12} cy={14} r={3} stroke="currentColor" strokeWidth={1.5} />
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
      d="M3 7h18M14.5 16.5l1 1"
    />
  </svg>
);
export default SvgPackagingSearch;
