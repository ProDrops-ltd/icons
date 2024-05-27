import * as React from "react";
import type { SVGProps } from "react";
const SvgMailFavourite = (props: SVGProps<SVGSVGElement>) => (
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m6 13 2.2 1.65a3 3 0 0 0 3.6 0L14 13m4.22-5.976-1.855-2.318A1.67 1.67 0 0 1 16 3.666V3.59a1.591 1.591 0 0 1 2.716-1.125L19 2.75l.284-.284A1.591 1.591 0 0 1 22 3.591v.075c0 .378-.129.745-.365 1.04l-1.854 2.318a1 1 0 0 1-1.562 0M5 22h10a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3"
    />
  </svg>
);
export default SvgMailFavourite;
