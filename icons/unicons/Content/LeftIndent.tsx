import * as React from "react";
import type { SVGProps } from "react";
const SvgLeftIndent = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9 5a1 1 0 0 0-1 1v12a1 1 0 1 0 2 0V6a1 1 0 0 0-1-1m4 2h8a1 1 0 1 0 0-2h-8a1 1 0 1 0 0 2M5.77 9.69a1 1 0 0 0-1.41-.13l-2 1.67a1 1 0 0 0 0 1.54l2 1.67a1.001 1.001 0 1 0 1.28-1.54L4.56 12l1.08-.9a1 1 0 0 0 .13-1.41M21 9h-8a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2m0 4h-8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2m0 4h-8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2"
    />
  </svg>
);
export default SvgLeftIndent;
