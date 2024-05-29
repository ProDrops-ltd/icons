import * as React from "react";
import type { SVGProps } from "react";
const SvgCommentDots = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="#6563FF" d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
    <path
      fill="#A2A1FF"
      d="M12 2a10 10 0 0 0-7.743 16.33l-1.964 1.963A1 1 0 0 0 3 22h9a10 10 0 0 0 0-20M8 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2m4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2m4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2"
    />
    <path
      fill="#6563FF"
      d="M8 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2M16 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
    />
  </svg>
);
export default SvgCommentDots;
