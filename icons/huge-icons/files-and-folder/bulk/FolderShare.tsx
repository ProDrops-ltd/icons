import * as React from "react";
import type { SVGProps } from "react";
const SvgFolderShare = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13 8V5.5a2 2 0 0 0-2-2H9.667a2 2 0 0 1-1.2-.4l-.934-.7a2 2 0 0 0-1.2-.4H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2M21 20v-2.5a2 2 0 0 0-2-2h-1.333a2 2 0 0 1-1.2-.4l-.934-.7a2 2 0 0 0-1.2-.4H13a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M14.25 6a.75.75 0 0 1 .75-.75h2A2.75 2.75 0 0 1 19.75 8v5.5a.75.75 0 0 1-1.5 0V8c0-.69-.56-1.25-1.25-1.25h-2a.75.75 0 0 1-.75-.75M5 11.25a.75.75 0 0 1 .75.75v4c0 .69.56 1.25 1.25 1.25h2a.75.75 0 0 1 0 1.5H7A2.75 2.75 0 0 1 4.25 16v-4a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFolderShare;
