import * as React from "react";
import type { SVGProps } from "react";
const SvgBagCheck = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.25 5a3.75 3.75 0 0 1 7.5 0v1.01a4 4 0 0 1 3.688 3.494l1 8A4 4 0 0 1 16.468 22H7.532a4 4 0 0 1-3.969-4.496l1-8A4 4 0 0 1 8.25 6.01zm6 0v1h-4.5V5a2.25 2.25 0 1 1 4.5 0m1.314 7.494a.75.75 0 1 0-1.128-.988l-2.87 3.28a.25.25 0 0 1-.345.03L9.47 13.415a.75.75 0 0 0-.938 1.172l1.753 1.402a1.75 1.75 0 0 0 2.41-.214z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBagCheck;
