import * as React from "react";
import type { SVGProps } from "react";
const SvgChatPlus = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgChatPlus;
