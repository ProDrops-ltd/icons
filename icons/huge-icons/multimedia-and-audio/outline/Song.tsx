import * as React from "react";
import type { SVGProps } from "react";
const SvgSong = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 4h11M2 8h11m4 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0m0 0V4a5 5 0 0 1 4 8M2 12h4"
    />
  </svg>
);
export default SvgSong;
