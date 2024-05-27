import * as React from "react";
import type { SVGProps } from "react";
const SvgNotesSearch = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 2v3M8 2v3m6.5 10.5 1 1M7 22h10a4 4 0 0 0 4-4V7.5a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4V18a4 4 0 0 0 4 4Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    />
  </svg>
);
export default SvgNotesSearch;
