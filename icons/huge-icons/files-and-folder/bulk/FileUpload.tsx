import * as React from "react";
import type { SVGProps } from "react";
const SvgFileUpload = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 22a4 4 0 0 0 3.877-3.01c.136-.535.57-.99 1.123-.99h7V5a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v13a4 4 0 0 0 4 4"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M18 22a4 4 0 0 0 3.877-3.01c.136-.535-.325-.99-.877-.99H11c-.552 0-.987.455-1.123.99A4 4 0 0 1 6 22z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M9.25 8.828a1 1 0 0 0-.134.116L7.53 10.53a.75.75 0 1 1-1.06-1.06l1.585-1.586a2.75 2.75 0 0 1 3.89 0L13.53 9.47a.75.75 0 0 1-1.06 1.06l-1.586-1.586a1 1 0 0 0-.134-.116V13a.75.75 0 1 1-1.5 0z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFileUpload;
