import * as React from "react";
import type { SVGProps } from "react";
const SvgHelp = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 6.75A2.25 2.25 0 0 0 9.75 9a.75.75 0 0 1-1.5 0 3.75 3.75 0 1 1 4.977 3.544.9.9 0 0 0-.375.237c-.081.09-.102.163-.102.219v1a.75.75 0 0 1-1.5 0v-1c0-1.002.808-1.638 1.486-1.873A2.251 2.251 0 0 0 12 6.75"
      clipRule="evenodd"
    />
    <path fill="currentColor" d="M13 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
  </svg>
);
export default SvgHelp;
