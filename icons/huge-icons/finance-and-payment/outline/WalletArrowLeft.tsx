import * as React from "react";
import type { SVGProps } from "react";
const SvgWalletArrowLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="m17.586 22-1.293-1.293a1 1 0 0 1 0-1.414L17.586 18M22 20h-5.414"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M22 15V6H6a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h7"
    />
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M22 6a4 4 0 0 0-4-4h-6a4 4 0 0 0-4 4h14ZM2 12v4h4a2 2 0 1 0 0-4z"
    />
  </svg>
);
export default SvgWalletArrowLeft;
