import * as React from "react";
import type { SVGProps } from "react";
const SvgFingerPrint = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.75 10a6.25 6.25 0 1 1 12.5 0v7a.75.75 0 0 0 1.5 0v-7a7.75 7.75 0 0 0-15.5 0v7a.75.75 0 0 0 1.5 0zM12 7.25A2.75 2.75 0 0 0 9.25 10v6.515a6.75 6.75 0 0 1-1.977 4.773l-.243.242a.75.75 0 0 1-1.06-1.06l.242-.243a5.25 5.25 0 0 0 1.538-3.712V10a4.25 4.25 0 0 1 8.5 0v6.515a6.75 6.75 0 0 1-1.977 4.773l-.243.242a.75.75 0 1 1-1.06-1.06l.242-.243a5.25 5.25 0 0 0 1.538-3.712V10A2.75 2.75 0 0 0 12 7.25m0 2a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFingerPrint;
