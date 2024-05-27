import * as React from "react";
import type { SVGProps } from "react";
const SvgOpenBox = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="M4 9v8a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V9M12 4h7.263c.343 0 .661.184.838.486l1.758 3C22.25 8.152 21.781 9 21.021 9h-4.984a1.95 1.95 0 0 1-1.675-.971zM12 4H4.737a.97.97 0 0 0-.838.486l-1.758 3C1.75 8.152 2.219 9 2.979 9h4.984c.686 0 1.322-.369 1.675-.971z"
    />
  </svg>
);
export default SvgOpenBox;
