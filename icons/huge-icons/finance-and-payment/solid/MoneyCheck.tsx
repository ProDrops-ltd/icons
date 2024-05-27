import * as React from "react";
import type { SVGProps } from "react";
const SvgMoneyCheck = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 4h12a4 4 0 0 1 4 4v5a1 1 0 0 1-1 1h-3a4 4 0 0 0-4 4v1a1 1 0 0 1-1 1H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4m0 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2m8 5a2 2 0 1 0-4 0 2 2 0 0 0 4 0m8.564 4.494a.75.75 0 0 0-1.128-.988l-2.87 3.28a.25.25 0 0 1-.345.03l-1.753-1.402a.75.75 0 1 0-.937 1.172l1.753 1.402a1.75 1.75 0 0 0 2.41-.214z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMoneyCheck;
