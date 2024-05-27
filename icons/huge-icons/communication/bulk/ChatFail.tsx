import * as React from "react";
import type { SVGProps } from "react";
const SvgChatFail = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13 3h-2a9 9 0 0 0-9 9v5a4 4 0 0 0 4 4h7a9 9 0 1 0 0-18"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M9.47 9.47a.75.75 0 0 1 1.06 0L12 10.94l1.47-1.47a.75.75 0 1 1 1.06 1.06L13.06 12l1.47 1.47a.75.75 0 1 1-1.06 1.06L12 13.06l-1.47 1.47a.75.75 0 1 1-1.06-1.06L10.94 12l-1.47-1.47a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgChatFail;
