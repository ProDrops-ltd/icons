import * as React from "react";
import type { SVGProps } from "react";
const SvgMonitor = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v8.25H2zm4 13a4 4 0 0 1-3.93-3.25h19.86A4 4 0 0 1 18 19h-5.25v2.25H15a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5h2.25V19zM7 6.25a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5zM6.25 11a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMonitor;
