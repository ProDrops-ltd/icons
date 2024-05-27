import * as React from "react";
import type { SVGProps } from "react";
const SvgWalletAdd = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19 16v6M22 14V6H6a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8"
    />
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M22 6a4 4 0 0 0-4-4h-6a4 4 0 0 0-4 4h14ZM2 12v4h4a2 2 0 1 0 0-4z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M22 19h-6"
    />
  </svg>
);
export default SvgWalletAdd;
