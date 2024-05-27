import * as React from "react";
import type { SVGProps } from "react";
const SvgHomeMail = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21 17.967V10.15c0-1.21-.54-2.357-1.47-3.123l-5-4.118a3.975 3.975 0 0 0-5.06 0l-5 4.118A4.05 4.05 0 0 0 3 10.15v7.817C3 20.194 4.79 22 7 22h10c2.21 0 4-1.806 4-4.033"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10 10a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3zm.335 2.33a.75.75 0 1 0-.67 1.34l1.105.554a2.75 2.75 0 0 0 2.46 0l1.105-.553a.75.75 0 1 0-.67-1.342l-1.106.553a1.25 1.25 0 0 1-1.118 0z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgHomeMail;
