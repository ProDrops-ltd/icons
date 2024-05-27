import * as React from "react";
import type { SVGProps } from "react";
const SvgSimCard = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 18V6a4 4 0 0 1 4-4h5.343a4 4 0 0 1 2.829 1.172l2.656 2.656A4 4 0 0 1 20 8.657V18a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11.25 18a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75M11.25 14a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSimCard;
