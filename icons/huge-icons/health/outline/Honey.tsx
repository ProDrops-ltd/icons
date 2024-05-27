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
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 3.5 16.5 6v5L12 13.5 7.5 11V6z"
    />
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7.5 11 4.5 2.5v5L7.5 21 3 18.5v-5zM16.5 11l4.5 2.5v5L16.5 21 12 18.5v-5z"
    />
  </svg>
);
export default SvgHoney;
