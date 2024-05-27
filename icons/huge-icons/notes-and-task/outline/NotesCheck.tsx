import * as React from "react";
import type { SVGProps } from "react";
const SvgNotesCheck = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 2v3M8 2v3m1 8 1.753 1.402a1 1 0 0 0 1.377-.122L15 11M7 22h10a4 4 0 0 0 4-4V7.5a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4V18a4 4 0 0 0 4 4"
    />
  </svg>
);
export default SvgNotesCheck;
