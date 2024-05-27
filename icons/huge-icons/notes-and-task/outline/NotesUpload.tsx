import * as React from "react";
import type { SVGProps } from "react";
const SvgNotesUpload = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 2v3M8 2v3m2 7 1.293-1.293a1 1 0 0 1 1.414 0L14 12m-2 4v-5M7 22h10a4 4 0 0 0 4-4V7.5a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4V18a4 4 0 0 0 4 4Z"
    />
  </svg>
);
export default SvgNotesUpload;
