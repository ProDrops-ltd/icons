import * as React from "react";
import type { SVGProps } from "react";
const SvgGivePill = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 5a3 3 0 1 1 6 0v6a3 3 0 1 1-6 0z"
      opacity={0.4}
    />
    <path fill="currentColor" d="M16 8h6v3a3 3 0 1 1-6 0z" />
    <path
      fill="currentColor"
      d="M4 10H2v9l4.31 2.155A8 8 0 0 0 9.89 22H18a2 2 0 1 0 0-4h-1.584c-.931 0-1.85-.217-2.683-.633l-2.714-1.721q.139-.183.234-.403a1.91 1.91 0 0 0-.99-2.503z"
      opacity={0.4}
    />
  </svg>
);
export default SvgGivePill;
