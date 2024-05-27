import * as React from "react";
import type { SVGProps } from "react";
const SvgSticker = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21.5 11H18a6 6 0 0 0-6 6v3.5M6 3h12a4 4 0 0 1 4 4v3.172a2 2 0 0 1-.586 1.414l-8.828 8.828a2 2 0 0 1-1.414.586H6a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4"
    />
  </svg>
);
export default SvgSticker;
