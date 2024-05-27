import * as React from "react";
import type { SVGProps } from "react";
const SvgFingerprint = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 2.75A3.25 3.25 0 0 0 2.75 6v2a.75.75 0 0 1-1.5 0V6A4.75 4.75 0 0 1 6 1.25h2a.75.75 0 0 1 0 1.5zM15.25 2a.75.75 0 0 1 .75-.75h2A4.75 4.75 0 0 1 22.75 6v2a.75.75 0 0 1-1.5 0V6A3.25 3.25 0 0 0 18 2.75h-2a.75.75 0 0 1-.75-.75M2 15.25a.75.75 0 0 1 .75.75v2A3.25 3.25 0 0 0 6 21.25h2a.75.75 0 0 1 0 1.5H6A4.75 4.75 0 0 1 1.25 18v-2a.75.75 0 0 1 .75-.75m20 0a.75.75 0 0 1 .75.75v2A4.75 4.75 0 0 1 18 22.75h-2a.75.75 0 0 1 0-1.5h2A3.25 3.25 0 0 0 21.25 18v-2a.75.75 0 0 1 .75-.75m-9-6a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75m-2.25.75a2.25 2.25 0 0 1 4.5 0v2.657c0 1.301-.517 2.55-1.437 3.47l-.343.343a.75.75 0 1 0 1.06 1.06l.344-.343a6.4 6.4 0 0 0 1.876-4.53V10a3.75 3.75 0 1 0-7.5 0v2.657c0 1.301-.517 2.55-1.437 3.47l-.343.343a.75.75 0 1 0 1.06 1.06l.343-.343a6.4 6.4 0 0 0 1.877-4.53z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFingerprint;