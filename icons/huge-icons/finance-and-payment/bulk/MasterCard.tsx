import * as React from "react";
import type { SVGProps } from "react";
const SvgMasterCard = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18 3a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4z"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10 9.75a2.25 2.25 0 1 0 .875 4.324A3.73 3.73 0 0 1 10.25 12c0-.767.23-1.48.625-2.074A2.2 2.2 0 0 0 10 9.75m2-.923a3.75 3.75 0 1 0 0 6.345 3.75 3.75 0 1 0 0-6.345m2 .923a2.24 2.24 0 0 0-1.5.573A2.24 2.24 0 0 0 11.75 12c0 .666.289 1.264.75 1.677A2.25 2.25 0 1 0 14 9.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMasterCard;
