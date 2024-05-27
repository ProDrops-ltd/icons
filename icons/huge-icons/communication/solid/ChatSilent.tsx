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
      d="M3.53 2.47a.75.75 0 0 0-1.06 1.06l2.136 2.136A8.97 8.97 0 0 0 2 12v5a4 4 0 0 0 4 4h7c1.96 0 3.773-.626 5.25-1.69l2.22 2.22a.75.75 0 1 0 1.06-1.06l-5.72-5.72H7a.75.75 0 0 1 0-1.5h7.31l-2.5-2.5H7a.75.75 0 0 1 0-1.5h3.31zM11 3h2a9 9 0 0 1 7.686 13.686L7.646 3.646A9 9 0 0 1 11 3"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgChatSilent;
