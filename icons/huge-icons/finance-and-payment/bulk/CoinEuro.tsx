import * as React from "react";
import type { SVGProps } from "react";
const SvgCoinEuro = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M9.84 11.25a3.2 3.2 0 0 0 0 1.5H13a.75.75 0 0 1 0 1.5h-2.322c.604.615 1.455 1 2.405 1 .938 0 1.782-.377 2.387-.981a.75.75 0 1 1 1.06 1.06 4.86 4.86 0 0 1-3.447 1.421 4.85 4.85 0 0 1-4.258-2.5H8a.75.75 0 0 1 0-1.5h.31a4.7 4.7 0 0 1 0-1.5H8a.75.75 0 0 1 0-1.5h.825a4.85 4.85 0 0 1 4.258-2.5c1.348 0 2.57.543 3.447 1.42a.75.75 0 1 1-1.06 1.061 3.36 3.36 0 0 0-2.387-.981c-.95 0-1.8.385-2.405 1H13a.75.75 0 0 1 0 1.5z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCoinEuro;
