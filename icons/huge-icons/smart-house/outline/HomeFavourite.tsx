import * as React from "react";
import type { SVGProps } from "react";
const SvgHomeFavourite = (props: SVGProps<SVGSVGElement>) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 17.967V10.15c0-1.21-.54-2.357-1.47-3.123l-5-4.118a3.975 3.975 0 0 0-5.06 0l-5 4.118A4.05 4.05 0 0 0 3 10.15v7.817C3 20.194 4.79 22 7 22h10c2.21 0 4-1.806 4-4.033Z"
    />
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.31 11.69 12 12l-.31-.31a2.188 2.188 0 0 0-3.093 3.094l2.166 2.166a1.75 1.75 0 0 0 2.474 0l2.166-2.166a2.188 2.188 0 0 0-3.094-3.093Z"
    />
  </svg>
);
export default SvgHomeFavourite;
