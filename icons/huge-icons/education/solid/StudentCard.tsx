import * as React from "react";
import type { SVGProps } from "react";
const SvgStudentCard = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 2a2 2 0 0 0-2 2v1.5h4V4a2 2 0 0 0-2-2M5 7a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3zm4 7a3 3 0 0 0-3 3 1 1 0 0 0 1 1h4a1 1 0 0 0 1-1 3 3 0 0 0-3-3m0 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4m9.75-2a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1 0-1.5h3a.75.75 0 0 1 .75.75M18 16.75a.75.75 0 0 0 0-1.5h-3a.75.75 0 0 0 0 1.5z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgStudentCard;
