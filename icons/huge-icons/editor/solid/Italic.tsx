import * as React from "react";
import type { SVGProps } from "react";
const SvgItalic = (props: SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      d="M16 4.25h-4a.75.75 0 0 0 0 1.5h1.006l-3.572 12.5H8a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-1.006l3.572-12.5H16a.75.75 0 0 0 0-1.5"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgItalic;
