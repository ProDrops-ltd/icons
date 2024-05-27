import * as React from "react";
import type { SVGProps } from "react";
const SvgArchiveSearch = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 13h1a2 2 0 0 1 1.6.8l1.2 1.6a4 4 0 0 0 6.4 0l1.2-1.6A2 2 0 0 1 18 13h1c.35 0 .687.06 1 .17V6a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v7.17c.313-.11.65-.17 1-.17m5.75-4.5a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0m1.75-3.25a3.25 3.25 0 0 0-2.767 4.956L8.47 11.47a.75.75 0 1 0 1.06 1.06l1.264-1.263A3.25 3.25 0 1 0 12.5 5.25"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArchiveSearch;
