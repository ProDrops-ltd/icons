import * as React from "react";
import type { SVGProps } from "react";
const SvgFolderMinus = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22 17v-7a4 4 0 0 0-4-4h-2.667a4 4 0 0 1-2.4-.8l-1.866-1.4a4 4 0 0 0-2.4-.8H6a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M15.75 13a.75.75 0 0 1-.75.75H9a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 .75.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFolderMinus;
