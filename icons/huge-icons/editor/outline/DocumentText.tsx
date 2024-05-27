import * as React from "react";
import type { SVGProps } from "react";
const SvgDocumentText = (props: SVGProps<SVGSVGElement>) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4 6a4 4 0 0 1 4-4h7.343a4 4 0 0 1 2.829 1.172l2.656 2.656A4 4 0 0 1 22 8.657V18a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M9 7h8M9 12h8M9 17h4"
    />
  </svg>
);
export default SvgDocumentText;
