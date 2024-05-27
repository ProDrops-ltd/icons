import * as React from "react";
import type { SVGProps } from "react";
const SvgWalletArrowRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22 6H6a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4z"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M22 6a4 4 0 0 0-4-4h-6a4 4 0 0 0-4 4zM2 12v4h4a2 2 0 1 0 0-4z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m20.604 19.25-.72-.72a.75.75 0 1 1 1.06-1.06l1.293 1.293a1.75 1.75 0 0 1 0 2.474l-1.292 1.293a.75.75 0 1 1-1.061-1.06l.72-.72H16a.75.75 0 0 1 0-1.5z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgWalletArrowRight;
