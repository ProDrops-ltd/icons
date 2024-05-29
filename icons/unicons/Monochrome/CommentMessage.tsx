import * as React from "react";
import type { SVGProps } from "react";
const SvgCommentMessage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="#6563FF" d="M17 13H7a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2" />
    <path
      fill="#A2A1FF"
      d="M12 2a10 10 0 0 0-7.743 16.33l-1.964 1.963A1 1 0 0 0 3 22h9a10 10 0 0 0 0-20M9 7h6a1 1 0 1 1 0 2H9a1 1 0 0 1 0-2m6 10H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2m2-4H7a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2"
    />
    <path
      fill="#6563FF"
      d="M15 17H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2m0-8H9a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2"
    />
  </svg>
);
export default SvgCommentMessage;
