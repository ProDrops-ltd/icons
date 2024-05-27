import * as React from "react";
import type { SVGProps } from "react";
const SvgRoadLocation = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.386 4a2 2 0 0 0-1.873 1.298l-4.5 12A2 2 0 0 0 3.886 20h16.228a2 2 0 0 0 1.873-2.702L18.3 7.47q-.146.03-.3.03a1.5 1.5 0 0 1-.827-2.752A2 2 0 0 0 15.614 4z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M18 12c2 0 4-3.79 4-6a4 4 0 0 0-8 0c0 2.21 2 6 4 6m0-4.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M12 15.25a.75.75 0 0 0-.75.75v1a.75.75 0 0 0 1.5 0v-1a.75.75 0 0 0-.75-.75M12 10.75a.75.75 0 0 0-.75.75v1a.75.75 0 0 0 1.5 0v-1a.75.75 0 0 0-.75-.75M12 6.25a.75.75 0 0 0-.75.75v1a.75.75 0 0 0 1.5 0V7a.75.75 0 0 0-.75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgRoadLocation;
