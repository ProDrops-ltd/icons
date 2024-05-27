import * as React from "react";
import type { SVGProps } from "react";
const SvgChatUser = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 0a4 4 0 0 0-4 4m4-4a4 4 0 0 1 4 4M11 3h2a9 9 0 1 1 0 18H6a4 4 0 0 1-4-4v-5a9 9 0 0 1 9-9Z"
    />
  </svg>
);
export default SvgChatUser;
