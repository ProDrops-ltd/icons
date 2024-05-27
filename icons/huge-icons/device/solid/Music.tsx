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
      d="M18.13 2.166a2.75 2.75 0 0 1 3.62 2.609V17a3.75 3.75 0 1 1-1.5-3V9.774a1.25 1.25 0 0 0-1.645-1.186l-6.633 2.21a3.25 3.25 0 0 0-2.222 3.084V19a3.75 3.75 0 1 1-1.5-3V8.882a4.75 4.75 0 0 1 3.248-4.506z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMusic;
