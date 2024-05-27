import * as React from "react";
import type { SVGProps } from "react";
const SvgDeal = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 14.578V8.57c0-.835.428-1.6 1.106-1.973l2.05-1.131A3.7 3.7 0 0 1 6.943 5h1.681c1.241 0 2.398.634 3.149 1.691l-1.94 2.675c-.475.655-.427 1.6.11 2.193a1.396 1.396 0 0 0 2.111 0l1.416-1.562 2.29 4.634c.627 1.268 0 2.847-1.27 3.198l-3.53.973a5.48 5.48 0 0 1-3.819-.337l-3.93-1.859C2.477 16.26 2 15.461 2 14.578"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M22 14.827V8.57c0-.835-.428-1.6-1.106-1.973l-2.05-1.131A3.7 3.7 0 0 0 17.057 5h-2.134c-1.215 0-2.364.61-3.123 1.656l-1.964 2.71c-.476.655-.428 1.6.11 2.193a1.396 1.396 0 0 0 2.11 0l1.416-1.562 2.29 4.634c.4.807.29 1.74-.17 2.402H20c1.105 0 2-.988 2-2.206"
    />
  </svg>
);
export default SvgDeal;
