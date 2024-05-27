import * as React from "react";
import type { SVGProps } from "react";
const SvgSun = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 1.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75M18 12a6 6 0 1 1-12 0 6 6 0 0 1 12 0m-5.25 9a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0zm6.851-16.602a.75.75 0 0 1 0 1.061l-.707.707a.75.75 0 0 1-1.06-1.06l.707-.708a.75.75 0 0 1 1.06 0M6.166 18.894a.75.75 0 1 0-1.06-1.06l-.707.707a.75.75 0 1 0 1.06 1.06zM22.75 12a.75.75 0 0 1-.75.75h-1a.75.75 0 0 1 0-1.5h1a.75.75 0 0 1 .75.75M3 12.75a.75.75 0 0 0 0-1.5H2a.75.75 0 0 0 0 1.5zm16.601 6.851a.75.75 0 0 1-1.06 0l-.707-.707a.75.75 0 0 1 1.06-1.06l.707.707a.75.75 0 0 1 0 1.06M5.106 6.166a.75.75 0 0 0 1.06-1.06l-.707-.707a.75.75 0 0 0-1.06 1.06z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSun;
