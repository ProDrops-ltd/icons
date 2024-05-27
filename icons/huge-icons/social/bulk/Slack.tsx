import * as React from "react";
import type { SVGProps } from "react";
const SvgSlack = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.63 4.236a2 2 0 0 1 4 0v5a2 2 0 1 1-4 0z"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M21.842 9.236a2 2 0 0 1-2 2h-2v-2a2 2 0 1 1 4 0M16.63 19.862a2 2 0 0 0-2-2h-2v2a2 2 0 0 0 4 0M7.319 4.138a2 2 0 0 0 2 2h2v-2a2 2 0 1 0-4 0M2.149 14.637a2 2 0 0 1 2-2h2v2a2 2 0 1 1-4 0"
    />
    <path
      fill="currentColor"
      d="M7.29 14.637a2 2 0 1 1 4 0v5.225a2 2 0 0 1-4 0zM9.42 7.236a2 2 0 1 1 0 4H4.148a2 2 0 1 1 0-4zM19.842 12.637a2 2 0 0 1 0 4H14.63a2 2 0 0 1 0-4z"
      opacity={0.4}
    />
  </svg>
);
export default SvgSlack;
