import * as React from "react";
import type { SVGProps } from "react";
const SvgHoney = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 2.5 16.5 5v5L12 12.5 7.5 10V5zm-5.5 9L11 14v5l-4.5 2.5L2 19v-5zM22 14l-4.5-2.5L13 14v5l4.5 2.5L22 19z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgHoney;
