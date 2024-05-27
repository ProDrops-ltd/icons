import * as React from "react";
import type { SVGProps } from "react";
const SvgCalendarCheck = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.75 2a.75.75 0 0 0-1.5 0v1.5H7a4 4 0 0 0-4 4v.75h18V7.5a4 4 0 0 0-4-4h-.25V2a.75.75 0 0 0-1.5 0v1.5h-6.5zM21 9.75H3V18a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4zm-5.435 3.744a.75.75 0 0 0-1.13-.988l-2.87 3.28a.25.25 0 0 1-.344.03L9.47 14.415a.75.75 0 1 0-.937 1.172l1.752 1.402a1.75 1.75 0 0 0 2.41-.214z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCalendarCheck;
