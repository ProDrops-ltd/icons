import * as React from "react";
import type { SVGProps } from "react";
const SvgPills1 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M5 4a2 2 0 0 1 2-2h10a2 2 0 1 1 0 4H7a2 2 0 0 1-2-2"
    />
    <path
      fill="currentColor"
      d="M5 10a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4z"
      opacity={0.4}
    />
    <path fill="currentColor" d="M15 14a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
  </svg>
);
export default SvgPills1;
