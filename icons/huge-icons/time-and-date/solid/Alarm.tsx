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
      d="M7.497 3.687a.75.75 0 1 0-.601-1.374 12.8 12.8 0 0 0-5.52 4.636.75.75 0 0 0 1.249.83 11.3 11.3 0 0 1 4.872-4.092m9.607-1.374a.75.75 0 0 0-.601 1.374c1.99.87 3.681 2.301 4.872 4.093a.75.75 0 1 0 1.25-.83 12.8 12.8 0 0 0-5.521-4.637m1.887 16.355A9 9 0 1 0 3 13c0 2.148.753 4.12 2.008 5.668l-1.662 2.965a.75.75 0 1 0 1.308.734l1.443-2.573A8.97 8.97 0 0 0 12 22a8.97 8.97 0 0 0 5.903-2.206l1.443 2.573a.75.75 0 1 0 1.308-.734zM12 7.25a.75.75 0 0 1 .75.75V12.6l2.666 1.777a.75.75 0 1 1-.832 1.248l-3-2A.75.75 0 0 1 11.25 13V8a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgAlarm;
