import * as React from "react";
import type { SVGProps } from "react";
const SvgAddTo = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20 19V9a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M12 8h7.5a1 1 0 0 1 .8.4l1.5 2A1 1 0 0 1 21 12h-5.5a1 1 0 0 1-.8-.4zM12 8H4.5a1 1 0 0 0-.8.4l-1.5 2A1 1 0 0 0 3 12h5.5a1 1 0 0 0 .8-.4z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m11.25 4.19-.72-.72a.75.75 0 1 0-1.06 1.06l1.293 1.293a1.75 1.75 0 0 0 2.474 0L14.53 4.53a.75.75 0 0 0-1.06-1.06l-.72.72V2a.75.75 0 0 0-1.5 0z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgAddTo;
