import * as React from "react";
import type { SVGProps } from "react";
const SvgWarningError = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.968 4.166c.886-1.555 3.178-1.555 4.064 0l7.672 13.466c.86 1.511-.26 3.368-2.032 3.368H4.328c-1.773 0-2.893-1.857-2.032-3.368zM13 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-.25-8a.75.75 0 1 0-1.5 0v5a.75.75 0 0 0 1.5 0z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgWarningError;
