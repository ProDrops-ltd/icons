import * as React from "react";
import type { SVGProps } from "react";
const SvgDna = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.825 12a7.175 7.175 0 1 1 14.35 0 7.175 7.175 0 0 1-14.35 0"
      clipRule="evenodd"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8.917 18.48a7.2 7.2 0 0 0-2.805 2.38.694.694 0 0 0 1.139.795 5.78 5.78 0 0 1 4.75-2.48c1.965 0 3.702.98 4.749 2.48a.694.694 0 1 0 1.138-.795 7.2 7.2 0 0 0-2.805-2.38 7.15 7.15 0 0 1-3.083.695 7.15 7.15 0 0 1-3.083-.695M7.25 2.345a.694.694 0 1 0-1.138.794 7.2 7.2 0 0 0 2.805 2.38 7.15 7.15 0 0 1 3.066-.694 5.78 5.78 0 0 1-4.732-2.48m4.767 2.48a7.15 7.15 0 0 1 3.066.694 7.2 7.2 0 0 0 2.805-2.38.694.694 0 1 0-1.139-.794 5.78 5.78 0 0 1-4.732 2.48M5.751 10.148c0-.383.31-.694.694-.694h11.11a.694.694 0 1 1 0 1.389H6.445a.694.694 0 0 1-.694-.695M5.751 13.852c0-.384.31-.695.694-.695h11.11a.694.694 0 0 1 0 1.389H6.445a.694.694 0 0 1-.694-.694"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgDna;
