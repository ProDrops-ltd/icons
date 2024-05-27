import * as React from "react";
import type { SVGProps } from "react";
const SvgTaskSearch = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="m14.5 15.5 1 1M16 4h1a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h1m8 0a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2m8 0a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2m7 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    />
  </svg>
);
export default SvgTaskSearch;
