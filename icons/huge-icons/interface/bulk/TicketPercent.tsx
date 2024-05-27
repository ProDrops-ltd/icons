import * as React from "react";
import type { SVGProps } from "react";
const SvgTicketPercent = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 17a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4v-1c0-.552-.46-.984-.982-1.164a3.001 3.001 0 0 1 0-5.672C21.54 8.984 22 8.552 22 8V7a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v1c0 .552.46.984.982 1.164a3.001 3.001 0 0 1 0 5.672C2.46 15.016 2 15.448 2 16z"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M10 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0M16 15a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M15.53 8.47a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 0 1-1.06-1.06l6-6a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTicketPercent;
