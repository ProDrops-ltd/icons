import * as React from "react";
import type { SVGProps } from "react";
const SvgTaskAdd = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 11v6m4-13h1a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h1m8 0a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2m8 0a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2m7 10H9"
    />
  </svg>
);
export default SvgTaskAdd;
