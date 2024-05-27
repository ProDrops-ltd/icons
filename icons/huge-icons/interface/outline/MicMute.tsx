import * as React from "react";
import type { SVGProps } from "react";
const SvgMicMute = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m21 20.75-18-18m4 4v7a5 5 0 0 0 9.39 2.397M4 11.75v2a8 8 0 0 0 14.438 4.75M20 11.75v2c0 .618-.07 1.22-.203 1.797M17 12.75v-6a5 5 0 0 0-9-3"
    />
  </svg>
);
export default SvgMicMute;
