import * as React from "react";
import type { SVGProps } from "react";
const SvgDirectionLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17.469 6.414a.75.75 0 0 1 .117 1.055L13.96 12l3.626 4.532a.75.75 0 1 1-1.172.936l-4-5a.75.75 0 0 1 0-.937l4-5a.75.75 0 0 1 1.054-.117"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11.469 6.414a.75.75 0 0 1 .117 1.055L7.96 12l3.626 4.532a.75.75 0 1 1-1.172.936l-4-5a.75.75 0 0 1 0-.937l4-5a.75.75 0 0 1 1.055-.117"
      clipRule="evenodd"
      opacity={0.4}
    />
  </svg>
);
export default SvgDirectionLeft;
