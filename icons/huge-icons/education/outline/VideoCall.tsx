import * as React from "react";
import type { SVGProps } from "react";
const SvgVideoCall = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 19v3m0 0H9m3 0h3M14 8a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM6 19h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v9a4 4 0 0 0 4 4Zm3.5-4h5a1.5 1.5 0 0 0 0-3h-5a1.5 1.5 0 0 0 0 3Z"
    />
  </svg>
);
export default SvgVideoCall;
