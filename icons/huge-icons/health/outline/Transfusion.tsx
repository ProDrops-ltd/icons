import * as React from "react";
import type { SVGProps } from "react";
const SvgTransfusion = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 14.9c0-4.072 3.837-8.089 5.83-9.9a1.724 1.724 0 0 1 2.34 0C18.164 6.81 22 10.827 22 14.9c0 3.5-2.65 7.1-7 7.1s-7-3.6-7-7.1Z"
    />
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M6.81 3.066C5.06 4.751 2 8.197 2 11.69 2 14.8 4.272 18 8 18q.351 0 .683-.037A7.3 7.3 0 0 1 8 14.9c0-3.116 2.246-6.2 4.194-8.287-.973-1.47-2.146-2.72-3.004-3.546a1.7 1.7 0 0 0-2.38 0Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M19 16c-.314 1.412-1.385 2.688-3 3"
    />
  </svg>
);
export default SvgTransfusion;
