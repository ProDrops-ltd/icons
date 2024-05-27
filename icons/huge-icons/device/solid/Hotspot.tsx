import * as React from "react";
import type { SVGProps } from "react";
const SvgHotspot = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.75 14a9.25 9.25 0 0 1 18.5 0 9.22 9.22 0 0 1-2.71 6.54.75.75 0 0 0 1.061 1.061A10.72 10.72 0 0 0 22.75 14c0-5.937-4.813-10.75-10.75-10.75S1.25 8.063 1.25 14c0 2.968 1.204 5.657 3.149 7.601a.75.75 0 1 0 1.06-1.06A9.22 9.22 0 0 1 2.75 14m4 0a5.25 5.25 0 1 1 8.962 3.712.75.75 0 0 0 1.061 1.061 6.75 6.75 0 1 0-9.546 0 .75.75 0 1 0 1.06-1.06A5.23 5.23 0 0 1 6.75 14M12 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgHotspot;
