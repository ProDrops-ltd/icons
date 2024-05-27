import * as React from "react";
import type { SVGProps } from "react";
const SvgMoneyFavourite = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 8a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"
      opacity={0.4}
    />
    <circle
      cx={1}
      cy={1}
      r={1}
      fill="currentColor"
      transform="matrix(1 0 0 -1 5 9)"
    />
    <circle
      cx={2}
      cy={2}
      r={2}
      fill="currentColor"
      transform="matrix(1 0 0 -1 10 14)"
    />
    <path
      fill="currentColor"
      d="m19.221 15.779-.22.22-.222-.22a1.562 1.562 0 1 0-2.21 2.21l1.547 1.546a1.25 1.25 0 0 0 1.768 0l1.547-1.546a1.562 1.562 0 1 0-2.21-2.21"
    />
  </svg>
);
export default SvgMoneyFavourite;
