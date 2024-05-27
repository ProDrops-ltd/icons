import * as React from "react";
import type { SVGProps } from "react";
const SvgCoinDollar = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-10-.75A1.25 1.25 0 1 1 13.25 10a.75.75 0 0 0 1.5 0c0-1.259-.846-2.32-2-2.646V6.5a.75.75 0 0 0-1.5 0v.854A2.751 2.751 0 0 0 12 12.75 1.25 1.25 0 1 1 10.75 14a.75.75 0 0 0-1.5 0c0 1.259.846 2.32 2 2.646v.854a.75.75 0 0 0 1.5 0v-.854A2.751 2.751 0 0 0 12 11.25"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCoinDollar;
