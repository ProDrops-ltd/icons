import * as React from "react";
import type { SVGProps } from "react";
const SvgDestination2 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.5 16a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M20 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
    />
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M10 16c0 2.21-2 6-4 6s-4-3.79-4-6a4 4 0 0 1 8 0Z"
    />
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M22 5c0 1.123-.946 2.561-1.775 3.607-.651.82-1.841.864-2.522.069C16.892 7.729 16 6.414 16 5.209 16 3 17.343 2 19 2s3 1 3 3Z"
    />
    <path
      stroke="currentColor"
      strokeDasharray="0.5 3"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.5 16 4.5-4.5"
    />
  </svg>
);
export default SvgDestination2;
