import * as React from "react";
import type { SVGProps } from "react";
const SvgFormatQuote = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.5 7h-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1l-1.03 2.058a1.342 1.342 0 0 0 2.4 1.2l1.419-2.836a2 2 0 0 0 .211-.894V9a2 2 0 0 0-2-2M17.5 7h-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1l-1.03 2.058a1.342 1.342 0 0 0 2.4 1.2l1.419-2.836a2 2 0 0 0 .211-.894V9a2 2 0 0 0-2-2"
    />
  </svg>
);
export default SvgFormatQuote;
