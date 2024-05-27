import * as React from "react";
import type { SVGProps } from "react";
const SvgArchiveFavourite = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22 19v-3a3 3 0 0 0-3-3h-1a2 2 0 0 0-1.6.8l-1.2 1.6a4 4 0 0 1-6.4 0l-1.2-1.6A2 2 0 0 0 6 13H5a3 3 0 0 0-3 3v3a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5 13h1a2 2 0 0 1 1.6.8l1.2 1.6a4 4 0 0 0 6.4 0l1.2-1.6A2 2 0 0 1 18 13h1c.35 0 .687.06 1 .17V6a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v7.17c.313-.11.65-.17 1-.17m6.22-1.976L9.364 8.706A1.67 1.67 0 0 1 9 7.666V7.59a1.591 1.591 0 0 1 2.716-1.125L12 6.75l.284-.284A1.591 1.591 0 0 1 15 7.591v.075c0 .378-.129.745-.365 1.04l-1.854 2.318a1 1 0 0 1-1.562 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArchiveFavourite;
