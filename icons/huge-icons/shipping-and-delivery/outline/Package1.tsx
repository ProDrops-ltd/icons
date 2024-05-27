import * as React from "react";
import type { SVGProps } from "react";
const SvgPackage1 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11 12h2"
    />
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18 16V9.495a2 2 0 0 0-.586-1.414L15.92 6.586A2 2 0 0 0 14.505 6h-5.01a2 2 0 0 0-1.414.586L6.586 8.08A2 2 0 0 0 6 9.495V16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7 9h10"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 2v1M12 21v1M20.071 3.929l-.707.707M4.636 19.364l-.707.707M22 12h-1M3 12H2M20.071 20.071l-.707-.707M4.636 4.636l-.707-.707"
    />
  </svg>
);
export default SvgPackage1;
