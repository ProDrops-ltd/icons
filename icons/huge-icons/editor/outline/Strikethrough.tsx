import * as React from "react";
import type { SVGProps } from "react";
const SvgStrikethrough = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="M9 15.5c0 1.933 1.79 3.5 4 3.5s4-1.567 4-3.5-1.79-3.5-4-3.5M4 12h16"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M9.75 8.5c0-1.428 1.358-2.75 3.25-2.75s3.25 1.322 3.25 2.75a.75.75 0 0 0 1.5 0c0-2.438-2.224-4.25-4.75-4.25S8.25 6.062 8.25 8.5c0 .632.15 1.223.415 1.75h1.832c-.473-.488-.747-1.109-.747-1.75m3.957 3.25H9.94c.84.63 1.92 1 3.061 1a.75.75 0 0 0 .707-1"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgStrikethrough;
