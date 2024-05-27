import * as React from "react";
import type { SVGProps } from "react";
const SvgChatSearch = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11 3h2a9 9 0 1 1 0 18H6a4 4 0 0 1-4-4v-5a9 9 0 0 1 9-9m1 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M8.25 12a3.75 3.75 0 1 1 6.879 2.068l.901.902a.75.75 0 1 1-1.06 1.06l-.902-.901A3.75 3.75 0 0 1 8.25 12"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgChatSearch;
