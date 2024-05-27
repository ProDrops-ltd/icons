import * as React from "react";
import type { SVGProps } from "react";
const SvgQuiz = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.824 16.5c.915 2.622 3.384 4.5 6.287 4.5h6.667C21.005 21 22 19.993 22 18.75v-3.375a7.88 7.88 0 0 0-4.628-7.202 7 7 0 0 1 .183 1.577c0 3.728-2.984 6.75-6.666 6.75z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M9.778 3h1.11c3.146 0 5.783 2.206 6.485 5.173a7 7 0 0 1 .183 1.577c0 3.728-2.985 6.75-6.667 6.75H4.222C2.995 16.5 2 15.493 2 14.25v-3.375C2 6.525 5.482 3 9.778 3M10 6.75c-.69 0-1.25.56-1.25 1.25a.75.75 0 0 1-1.5 0A2.75 2.75 0 1 1 10 10.75a.75.75 0 0 1 0-1.5 1.25 1.25 0 1 0 0-2.5M11 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgQuiz;
