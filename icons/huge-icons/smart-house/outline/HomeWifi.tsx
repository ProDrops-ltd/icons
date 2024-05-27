import * as React from "react";
import type { SVGProps } from "react";
const SvgHomeWifi = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.75 17a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.243 12.757A5.98 5.98 0 0 0 12 11a5.98 5.98 0 0 0-4.243 1.757M9.88 14.88A3 3 0 0 1 12 14a3 3 0 0 1 2.121.879M21 10.15v7.817C21 20.194 19.21 22 17 22H7c-2.21 0-4-1.806-4-4.033V10.15c0-1.21.54-2.357 1.47-3.123l5-4.118a3.975 3.975 0 0 1 5.06 0l5 4.118A4.05 4.05 0 0 1 21 10.15"
    />
  </svg>
);
export default SvgHomeWifi;
