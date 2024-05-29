import * as React from "react";
import type { SVGProps } from "react";
const SvgPulse = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#000"
      d="M21 11h-3.94a.8.8 0 0 0-.21 0h-.17q-.078.045-.15.1-.085.056-.16.12a1 1 0 0 0-.09.13 1.3 1.3 0 0 0-.12.2l-1.6 4.41-4.17-11.3a1 1 0 0 0-1.88 0L6.2 11H3a1 1 0 0 0 0 2h4.3a1 1 0 0 0 .16-.1 2 2 0 0 0 .16-.12l.09-.13q.072-.094.12-.2l1.62-4.53 4.16 11.42a1 1 0 0 0 1.88 0l2.3-6.34H21a1 1 0 0 0 0-2"
    />
  </svg>
);
export default SvgPulse;
