import * as React from "react";
import type { SVGProps } from "react";
const SvgClipboardActivity = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="M16 4h1a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h1m8 0a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2m8 0a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7 13h2l2-2 2 4 2-2h2"
    />
  </svg>
);
export default SvgClipboardActivity;
