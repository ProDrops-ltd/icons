import * as React from "react";
import type { SVGProps } from "react";
const SvgFileReload = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 6v12a4 4 0 0 0 4 4h6l8-8V6a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4"
      opacity={0.4}
    />
    <path fill="currentColor" d="M13 18v4l8-8h-4a4 4 0 0 0-4 4" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M13.627 7.445a2.25 2.25 0 0 0-2.342-.531.75.75 0 0 1-.498-1.415 3.75 3.75 0 0 1 4.785 4.786.75.75 0 0 1-1.414-.499 2.25 2.25 0 0 0-.531-2.341m.116 4.17a.75.75 0 0 1-.458.957A3.75 3.75 0 0 1 8.5 7.786a.75.75 0 1 1 1.415.5 2.25 2.25 0 0 0 2.873 2.872.75.75 0 0 1 .956.458"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFileReload;
