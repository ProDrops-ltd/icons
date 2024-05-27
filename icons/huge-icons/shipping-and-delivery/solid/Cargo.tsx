import * as React from "react";
import type { SVGProps } from "react";
const SvgCargo = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.75 2a.75.75 0 0 0-1.5 0v1.649l-5.222 4.35H6a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4v-6a4 4 0 0 0-4-4h-.028L12.75 3.65zm2.879 6L12 4.976 8.372 8zM12 11.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75M7.75 12a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0zm9.25-.75a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCargo;
