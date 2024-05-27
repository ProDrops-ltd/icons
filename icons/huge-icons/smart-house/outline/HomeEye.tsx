import * as React from "react";
import type { SVGProps } from "react";
const SvgHomeEye = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21 17.967V10.15c0-1.21-.54-2.357-1.47-3.123l-5-4.118a3.975 3.975 0 0 0-5.06 0l-5 4.118A4.05 4.05 0 0 0 3 10.15v7.817C3 20.194 4.79 22 7 22h10c2.21 0 4-1.806 4-4.033Z"
    />
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M15.991 12.903a1.486 1.486 0 0 1 0 2.194C15.08 15.954 13.631 17 12 17c-1.63 0-3.079-1.046-3.991-1.903a1.486 1.486 0 0 1 0-2.194C8.92 12.046 10.369 11 12 11c1.63 0 3.079 1.046 3.991 1.903Z"
    />
    <circle cx={12} cy={14} r={1} fill="currentColor" />
  </svg>
);
export default SvgHomeEye;
