import * as React from "react";
import type { SVGProps } from "react";
const SvgAlarm = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.715 17.417a.75.75 0 0 1 .11 1.055l-3.242 4a.75.75 0 1 1-1.166-.944l3.243-4a.75.75 0 0 1 1.055-.11m10.57 0a.75.75 0 0 1 1.055.11l3.243 4a.75.75 0 1 1-1.166.945l-3.242-4a.75.75 0 0 1 .11-1.055M7.884 1.7a.75.75 0 0 1-.387.987c-1.99.87-3.681 2.301-4.872 4.093a.75.75 0 0 1-1.25-.83 12.8 12.8 0 0 1 5.521-4.637.75.75 0 0 1 .988.387m8.232 0a.75.75 0 0 1 .988-.387 12.8 12.8 0 0 1 5.52 4.636.75.75 0 1 1-1.248.83 11.3 11.3 0 0 0-4.873-4.092.75.75 0 0 1-.387-.987"
      clipRule="evenodd"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 22a9 9 0 1 0 0-18 9 9 0 0 0 0 18m.5-13.028c0-.38-.336-.688-.75-.688-.415 0-.75.308-.75.688v4.586c0 .23.125.445.334.572l3 1.835c.344.21.81.125 1.04-.191s.136-.743-.209-.954L12.5 13.19z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgAlarm;
