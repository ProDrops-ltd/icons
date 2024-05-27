import * as React from "react";
import type { SVGProps } from "react";
const SvgMail = (props: SVGProps<SVGSVGElement>) => (
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
      d="m6 8 3.781 2.52a4 4 0 0 0 4.438 0L18 8M6 21h12a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4"
    />
  </svg>
);
export default SvgMail;
