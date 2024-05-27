import * as React from "react";
import type { SVGProps } from "react";
const SvgChatBlock = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11 3h2a9 9 0 1 1 0 18H6a4 4 0 0 1-4-4v-5a9 9 0 0 1 9-9m-2 9c0-.556.151-1.077.415-1.524l4.109 4.109A3 3 0 0 1 9 12m6 0c0 .556-.151 1.077-.415 1.524l-4.109-4.109A3 3 0 0 1 15 12"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgChatBlock;
