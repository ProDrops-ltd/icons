import * as React from "react";
import type { SVGProps } from "react";
const SvgZoomOutRectangle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4m-5.75 6c0 .414.336.75.75.75h1.19l-5.44 5.44V13a.75.75 0 0 0-1.5 0v3c0 .414.336.75.75.75h3a.75.75 0 0 0 0-1.5H9.81l5.44-5.44V11a.75.75 0 0 0 1.5 0V8a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgZoomOutRectangle;
