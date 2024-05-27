import * as React from "react";
import type { SVGProps } from "react";
const SvgFiles = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13 2a4 4 0 0 1 3.71 2.5H11A5.5 5.5 0 0 0 5.5 10v7.71A4 4 0 0 1 3 14V6a4 4 0 0 1 4-4zm-6 8v8a4 4 0 0 0 4 4h2.343q.463 0 .907-.104V20A4.75 4.75 0 0 1 19 15.25h1.896q.104-.444.104-.907V10a4 4 0 0 0-4-4h-6a4 4 0 0 0-4 4m9.172 10.828a4 4 0 0 1-.422.367V20A3.25 3.25 0 0 1 19 16.75h1.195a4 4 0 0 1-.367.422z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFiles;
