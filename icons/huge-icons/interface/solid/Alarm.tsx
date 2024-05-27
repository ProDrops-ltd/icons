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
      d="M7.497 2.687a.75.75 0 1 0-.6-1.374 12.8 12.8 0 0 0-5.521 4.636.75.75 0 0 0 1.249.83 11.3 11.3 0 0 1 4.872-4.092m9.607-1.374a.75.75 0 0 0-.601 1.374c1.99.87 3.681 2.301 4.872 4.093a.75.75 0 0 0 1.25-.83 12.8 12.8 0 0 0-5.521-4.637m2.345 17.583A9.46 9.46 0 0 0 21.5 13a9.5 9.5 0 0 0-19 0 9.46 9.46 0 0 0 2.05 5.896l-2.133 2.632a.75.75 0 1 0 1.166.944l2-2.467A9.47 9.47 0 0 0 12 22.5a9.47 9.47 0 0 0 6.417-2.495l2 2.467a.75.75 0 1 0 1.166-.944zM12 7.25a.75.75 0 0 1 .75.75v4.599l2.666 1.777a.75.75 0 1 1-.832 1.248l-3-2A.75.75 0 0 1 11.25 13V8a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgAlarm;
