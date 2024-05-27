import * as React from "react";
import type { SVGProps } from "react";
const SvgDarkMode = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"
    />
    <path
      fill="currentColor"
      d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2z"
      opacity={0.4}
    />
  </svg>
);
export default SvgDarkMode;
