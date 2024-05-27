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
      fillRule="evenodd"
      d="M17.734 11.947a5.001 5.001 0 1 0-1.47-9.894 5.001 5.001 0 0 0 1.47 9.894M10 6q.318 0 .63.024-.008.045-.015.091-.07.468-.07.955a6.5 6.5 0 0 0 7.44 6.432Q18 13.75 18 14a8 8 0 1 1-8-8"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgNotificationCircle;
