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
      fill="currentColor"
      fillRule="evenodd"
      d="M21 10.15v7.817C21 20.194 19.21 22 17 22H7c-2.21 0-4-1.806-4-4.033V10.15c0-1.21.54-2.357 1.47-3.123l5-4.118a3.975 3.975 0 0 1 5.06 0l5 4.118A4.05 4.05 0 0 1 21 10.15M12 12l.31-.31a2.187 2.187 0 1 1 3.093 3.094l-2.166 2.166a1.75 1.75 0 0 1-2.474 0l-2.166-2.166a2.188 2.188 0 0 1 3.094-3.093z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgHomeFavourite;
