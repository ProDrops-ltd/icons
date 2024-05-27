import * as React from "react";
import type { SVGProps } from "react";
const SvgChatSilent = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11 3h2a9 9 0 1 1 0 18H6a4 4 0 0 1-4-4v-5a9 9 0 0 1 9-9M7 9.25a.75.75 0 0 0 0 1.5h2.69l-1.5-1.5zm0 4a.75.75 0 0 0 0 1.5h6.69l-1.5-1.5z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2.47 2.47a.75.75 0 0 1 1.06 0l18 18a.75.75 0 1 1-1.06 1.06l-2.22-2.22A8.96 8.96 0 0 1 13 21H6a4 4 0 0 1-4-4v-5c0-2.47.995-4.707 2.606-6.334L2.47 3.53a.75.75 0 0 1 0-1.06M7 9.25a.75.75 0 0 0 0 1.5h2.69l-1.5-1.5zm0 4a.75.75 0 0 0 0 1.5h6.69l-1.5-1.5z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgChatSilent;
