import * as React from "react";
import type { SVGProps } from "react";
const SvgHomeUpload = (props: SVGProps<SVGSVGElement>) => (
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
      d="m10 11 1.293-1.293a1 1 0 0 1 1.414 0L14 11m-2-1v7m9-6.85v7.817C21 20.194 19.21 22 17 22H7c-2.21 0-4-1.806-4-4.033V10.15c0-1.21.54-2.357 1.47-3.123l5-4.118a3.975 3.975 0 0 1 5.06 0l5 4.118A4.05 4.05 0 0 1 21 10.15"
    />
  </svg>
);
export default SvgHomeUpload;
