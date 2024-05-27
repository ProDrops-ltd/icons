import * as React from "react";
import type { SVGProps } from "react";
const SvgNotificationCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 22a8 8 0 0 0 7.734-10.053Q17.374 12 17 12a5 5 0 0 1-4.946-5.734A8 8 0 1 0 10 22"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M22 7a5.001 5.001 0 1 1-10.002 0A5.001 5.001 0 0 1 22 7"
    />
  </svg>
);
export default SvgNotificationCircle;
