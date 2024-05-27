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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.373 8.173A7.88 7.88 0 0 1 22 15.375v3.375c0 1.243-.995 2.25-2.222 2.25H13.11c-2.903 0-5.372-1.878-6.287-4.5m10.549-8.327C16.67 5.206 14.034 3 10.889 3H9.778C5.482 3 2 6.526 2 10.875v3.375c0 1.243.995 2.25 2.222 2.25h2.602m10.549-8.327a7 7 0 0 1 .183 1.577c0 3.728-2.985 6.75-6.667 6.75H6.824M10 10a2 2 0 1 0-2-2"
    />
    <path fill="currentColor" d="M11 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
  </svg>
);
export default SvgQuiz;
