import * as React from "react";
import type { SVGProps } from "react";
const SvgCompas = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18 8a6 6 0 0 1-6 6m6-6a6 6 0 0 0-6-6m6 6H6m6 6a6 6 0 0 1-6-6m6 6c1.105 0 2-2.686 2-6s-.895-6-2-6m0 12c-1.105 0-2-2.686-2-6s.895-6 2-6m0 12v3M6 8a6 6 0 0 1 6-6m1.5 16.5A1.5 1.5 0 0 0 12 17m1.5 1.5A1.5 1.5 0 0 1 12 20m1.5-1.5H20M12 17a1.5 1.5 0 0 0-1.5 1.5m0 0A1.5 1.5 0 0 0 12 20m-1.5-1.5H4m8 1.5v2"
    />
  </svg>
);
export default SvgCompas;
