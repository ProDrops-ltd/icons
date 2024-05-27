import * as React from "react";
import type { SVGProps } from "react";
const SvgCalling = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21 19v-1.646a2 2 0 0 0-1.257-1.857l-2.034-.813a2 2 0 0 0-2.532.962L15 16s-2.5-.5-4.5-2.5S8 9 8 9l.354-.177a2 2 0 0 0 .963-2.532l-.814-2.034A2 2 0 0 0 6.646 3H5a2 2 0 0 0-2 2c0 8.837 7.163 16 16 16a2 2 0 0 0 2-2"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12.25 7a.75.75 0 0 1 .75-.75A4.75 4.75 0 0 1 17.75 11a.75.75 0 0 1-1.5 0A3.25 3.25 0 0 0 13 7.75a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12.25 3a.75.75 0 0 1 .75-.75A8.75 8.75 0 0 1 21.75 11a.75.75 0 0 1-1.5 0A7.25 7.25 0 0 0 13 3.75a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCalling;
