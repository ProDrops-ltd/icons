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
      d="M6 9a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3z"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 1.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75M12 20.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75M20.601 3.398a.75.75 0 0 1 0 1.061l-.707.707a.75.75 0 0 1-1.06-1.06l.707-.708a.75.75 0 0 1 1.06 0M5.166 18.834a.75.75 0 0 1 0 1.06l-.707.707a.75.75 0 0 1-1.06-1.06l.707-.707a.75.75 0 0 1 1.06 0M22.75 12a.75.75 0 0 1-.75.75h-1a.75.75 0 0 1 0-1.5h1a.75.75 0 0 1 .75.75M13.75 9a.75.75 0 0 1-.75.75h-2a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 .75.75M3.75 12a.75.75 0 0 1-.75.75H2a.75.75 0 0 1 0-1.5h1a.75.75 0 0 1 .75.75M20.601 20.601a.75.75 0 0 1-1.06 0l-.707-.707a.75.75 0 0 1 1.06-1.06l.707.707a.75.75 0 0 1 0 1.06M5.166 5.166a.75.75 0 0 1-1.06 0l-.708-.707A.75.75 0 1 1 4.46 3.4l.707.707a.75.75 0 0 1 0 1.06"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPackage;