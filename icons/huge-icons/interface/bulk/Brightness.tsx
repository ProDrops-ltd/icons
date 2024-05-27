import * as React from "react";
import type { SVGProps } from "react";
const SvgBrightness = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={12} cy={12} r={6} fill="currentColor" opacity={0.4} />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11.75 2a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75M11.75 19.478a.75.75 0 0 1 .75.75v1a.75.75 0 1 1-1.5 0v-1a.75.75 0 0 1 .75-.75M21.876 6.375a.75.75 0 0 1-.274 1.024l-.867.5a.75.75 0 1 1-.75-1.299l.867-.5a.75.75 0 0 1 1.024.275M4.276 15.875A.75.75 0 0 1 4 16.9l-.866.5a.75.75 0 0 1-.75-1.3l.866-.5a.75.75 0 0 1 1.025.275M2.124 6.375A.75.75 0 0 1 3.148 6.1l.866.5a.75.75 0 1 1-.75 1.3l-.866-.5a.75.75 0 0 1-.274-1.025M19.71 15.875a.75.75 0 0 1 1.025-.274l.867.5a.75.75 0 0 1-.75 1.299l-.867-.5a.75.75 0 0 1-.274-1.025"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBrightness;
