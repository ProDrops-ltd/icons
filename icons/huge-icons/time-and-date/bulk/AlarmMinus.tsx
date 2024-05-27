import * as React from "react";
import type { SVGProps } from "react";
const SvgAlarmMinus = (props: SVGProps<SVGSVGElement>) => (
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
      d="m4.874 18.498-2.457 3.03a.75.75 0 0 0 1.166.944l2.315-2.856a9 9 0 0 1-1.024-1.118m13.228 1.118 2.315 2.856a.75.75 0 0 0 1.166-.944l-2.457-3.03q-.465.602-1.024 1.118"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M21 13a9 9 0 1 1-18 0 9 9 0 0 1 18 0"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7.884 1.7a.75.75 0 0 1-.387.987c-1.99.87-3.681 2.301-4.872 4.093a.75.75 0 0 1-1.25-.83 12.8 12.8 0 0 1 5.521-4.637.75.75 0 0 1 .988.387m8.232 0a.75.75 0 0 1 .988-.387 12.8 12.8 0 0 1 5.52 4.636.75.75 0 0 1-1.249.83 11.3 11.3 0 0 0-4.872-4.092.75.75 0 0 1-.387-.987M15.75 13a.75.75 0 0 1-.75.75H9a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 .75.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgAlarmMinus;
