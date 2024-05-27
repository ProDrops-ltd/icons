import * as React from "react";
import type { SVGProps } from "react";
const SvgLove = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.685 5 12 5.703 11.315 5a5.36 5.36 0 0 0-7.717 0c-2.073 2.127-2.137 5.554-.144 7.76l5.726 6.338a3.78 3.78 0 0 0 5.64 0l5.726-6.338c1.993-2.206 1.93-5.633-.144-7.76a5.36 5.36 0 0 0-7.717 0"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M16.25 6.5a.75.75 0 0 1 .75-.75 2.75 2.75 0 0 1 2.75 2.75.75.75 0 0 1-1.5 0c0-.69-.56-1.25-1.25-1.25a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLove;
