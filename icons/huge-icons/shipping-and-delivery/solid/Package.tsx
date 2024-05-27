import * as React from "react";
import type { SVGProps } from "react";
const SvgPackage = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 1.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75M9 6a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3zm4 3.75a.75.75 0 0 0 0-1.5h-2a.75.75 0 0 0 0 1.5zM12.75 21a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0zm7.851-17.602a.75.75 0 0 1 0 1.061l-.707.707a.75.75 0 0 1-1.06-1.06l.707-.708a.75.75 0 0 1 1.06 0M5.166 19.894a.75.75 0 1 0-1.06-1.06l-.707.707a.75.75 0 1 0 1.06 1.06zM22.75 12a.75.75 0 0 1-.75.75h-1a.75.75 0 0 1 0-1.5h1a.75.75 0 0 1 .75.75M3 12.75a.75.75 0 0 0 0-1.5H2a.75.75 0 0 0 0 1.5zM20.601 20.6a.75.75 0 0 1-1.06 0l-.707-.707a.75.75 0 1 1 1.06-1.06l.707.707a.75.75 0 0 1 0 1.06M4.106 5.166a.75.75 0 1 0 1.06-1.06l-.707-.708A.75.75 0 1 0 3.4 4.46z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPackage;
