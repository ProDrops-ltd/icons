import * as React from "react";
import type { SVGProps } from "react";
const SvgUsb = (props: SVGProps<SVGSVGElement>) => (
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
      d="m10.2 3.4 1-1.333a1 1 0 0 1 1.6 0l1 1.333A1 1 0 0 1 13 5h-2a1 1 0 0 1-.8-1.6"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 5v13"
    />
    <path fill="currentColor" d="M19.5 6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
    <circle cx={12} cy={20} r={2} stroke="currentColor" strokeWidth={1.5} />
    <path
      fill="currentColor"
      d="M4.5 7.5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18 7v2.28a1 1 0 0 1-.684.948L12 12M6 9v2.28a1 1 0 0 0 .684.948L12 14"
    />
  </svg>
);
export default SvgUsb;
