import * as React from "react";
import type { SVGProps } from "react";
const SvgMusic = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.75 9.298a.75.75 0 0 0-.75.75v8a.75.75 0 0 0 1.5 0v-8a.75.75 0 0 0-.75-.75M18.25 6.298a.75.75 0 0 0-.75.75v9a.75.75 0 0 0 1.5 0v-9a.75.75 0 0 0-.75-.75"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="m11.514 10.042 4.743-1.897A2 2 0 0 1 19 10.002v-5a2 2 0 0 0-2.743-1.857l-4.743 1.897A4 4 0 0 0 9 8.756v5a4 4 0 0 1 2.514-3.714M19 16.048a3 3 0 1 1-6 0 3 3 0 0 1 6 0M10.5 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
      opacity={0.4}
    />
  </svg>
);
export default SvgMusic;
