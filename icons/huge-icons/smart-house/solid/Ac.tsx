import * as React from "react";
import type { SVGProps } from "react";
const SvgAc = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 2.75c-1.45 0-2.761.587-3.712 1.538a.75.75 0 0 1-1.061-1.061A6.73 6.73 0 0 1 12 1.25c1.864 0 3.552.756 4.773 1.977a.75.75 0 0 1-1.06 1.06A5.23 5.23 0 0 0 12 2.75m0 3a2.24 2.24 0 0 0-1.591.659.75.75 0 0 1-1.06-1.06A3.74 3.74 0 0 1 12 4.25a3.74 3.74 0 0 1 2.652 1.098.75.75 0 0 1-1.061 1.061A2.24 2.24 0 0 0 12 5.75M22 12a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2q0 .126.008.25h19.984A4 4 0 0 0 22 14zm-.402 3.75H2.402A4 4 0 0 0 6 18h12a4 4 0 0 0 3.598-2.25M16.75 20.5a.75.75 0 0 0-1.5 0V22a.75.75 0 0 0 1.5 0zM12 19.75a.75.75 0 0 1 .75.75V22a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75m-3.25.75a.75.75 0 0 0-1.5 0V22a.75.75 0 0 0 1.5 0z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgAc;
