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
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12 16v1M12 11.5v1M12 7v1M11.168 4H8.386a2 2 0 0 0-1.873 1.298l-4.5 12A2 2 0 0 0 3.886 20h16.228a2 2 0 0 0 1.873-2.702l-1.279-3.409"
    />
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M19.425 6.313a1.375 1.375 0 1 1-2.75 0 1.375 1.375 0 0 1 2.75 0Z"
    />
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M22.174 6.313c0 2.277-2.75 5.499-4.124 5.499-1.375 0-4.125-3.222-4.125-5.5a4.125 4.125 0 0 1 8.25 0Z"
    />
  </svg>
);
export default SvgRoadLocation;
