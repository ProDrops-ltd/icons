import * as React from "react";
import type { SVGProps } from "react";
const SvgExam = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 5a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm3.25 4a2.75 2.75 0 0 1 5.5 0v3a.75.75 0 0 1-1.5 0v-1.25h-2.5V12a.75.75 0 0 1-1.5 0V9m4 .25V9a1.25 1.25 0 1 0-2.5 0v.25zm-4 5.75a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75M7 17.25a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5zm6.25-9.75a.75.75 0 0 1 .75-.75h.75V6a.75.75 0 0 1 1.5 0v.75H17a.75.75 0 0 1 0 1.5h-.75V9a.75.75 0 0 1-1.5 0v-.75H14a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgExam;
