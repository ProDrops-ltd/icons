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
      fill="currentColor"
      fillRule="evenodd"
      d="M6 2a4 4 0 0 0-4 4v9a4 4 0 0 0 4 4h5.25v2.25H9a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-2.25V19H18a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4zm6 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4m-4 7.5A1.5 1.5 0 0 1 9.5 12h5a1.5 1.5 0 0 1 0 3h-5A1.5 1.5 0 0 1 8 13.5"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgVideoCall;
