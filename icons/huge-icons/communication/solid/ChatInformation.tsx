import * as React from "react";
import type { SVGProps } from "react";
const SvgChatInformation = (props: SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      d="M13 3h-2a9 9 0 0 0-9 9v5a4 4 0 0 0 4 4h7a9 9 0 1 0 0-18m-1 4.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75m.75 4.75a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgChatInformation;
