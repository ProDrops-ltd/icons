import * as React from "react";
import type { SVGProps } from "react";
const SvgDonation = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 9H2v9l4.31 2.155A8 8 0 0 0 9.89 21H18a2 2 0 1 0 0-4h-1.584c-.931 0-1.85-.217-2.683-.633l-2.941-1.471a1.911 1.911 0 0 0-.53-3.156z"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M15 3a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm3.5 3.75a.75.75 0 0 0 0-1.5h-2a.75.75 0 0 0 0 1.5z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgDonation;
