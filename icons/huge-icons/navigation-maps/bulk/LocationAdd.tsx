import * as React from "react";
import type { SVGProps } from "react";
const SvgLocationAdd = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 22c3.375 0 9-6.202 9-11.111S16.97 2 12 2s-9 3.98-9 8.889C3 15.799 8.625 22 12 22m.75-13a.75.75 0 0 0-1.5 0v1.25H10a.75.75 0 0 0 0 1.5h1.25V13a.75.75 0 0 0 1.5 0v-1.25H14a.75.75 0 0 0 0-1.5h-1.25z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 16a5 5 0 1 0 0-10 5 5 0 0 0 0 10m.75-7a.75.75 0 0 0-1.5 0v1.25H10a.75.75 0 0 0 0 1.5h1.25V13a.75.75 0 0 0 1.5 0v-1.25H14a.75.75 0 0 0 0-1.5h-1.25z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLocationAdd;
