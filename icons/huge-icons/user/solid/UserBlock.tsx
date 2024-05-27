import * as React from "react";
import type { SVGProps } from "react";
const SvgUserBlock = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0m3 10c0 2.21-3.134 4-7 4s-7-1.79-7-4 3.134-4 7-4 7 1.79 7 4m-.524-4.415 4.109-4.109a3 3 0 0 1-4.109 4.109M15 10c0 .556.151 1.077.415 1.524l4.109-4.109A3 3 0 0 0 15 10"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgUserBlock;
