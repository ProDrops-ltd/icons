import * as React from "react";
import type { SVGProps } from "react";
const SvgVoiceMail = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 17a5 5 0 1 1-10 0 5 5 0 0 1 10 0M22 7a5 5 0 1 1-10 0 5 5 0 0 1 10 0"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8.949 20.962c-.293-.293-.275-.787.04-1.102L19.76 9.09c.316-.316.809-.334 1.102-.041.293.292.275.786-.04 1.101L10.05 20.92c-.316.316-.81.334-1.102.041"
      clipRule="evenodd"
      opacity={0.4}
    />
  </svg>
);
export default SvgVoiceMail;
