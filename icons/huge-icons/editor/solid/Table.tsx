import * as React from "react";
import type { SVGProps } from "react";
const SvgTable = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.25 7A4.75 4.75 0 0 1 7 2.25h10A4.75 4.75 0 0 1 21.75 7v10A4.75 4.75 0 0 1 17 21.75H7A4.75 4.75 0 0 1 2.25 17zM7 3.75A3.25 3.25 0 0 0 3.75 7v1.074h7.5V3.75zm5.75 0v4.324h7.5V7A3.25 3.25 0 0 0 17 3.75zm7.5 5.824h-7.5v4.853h7.5zm0 6.353h-7.5v4.323H17A3.25 3.25 0 0 0 20.25 17zm-9 4.323v-4.323h-7.5V17A3.25 3.25 0 0 0 7 20.25zm-7.5-5.823h7.5V9.574h-7.5z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTable;
