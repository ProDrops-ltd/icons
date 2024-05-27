import * as React from "react";
import type { SVGProps } from "react";
const SvgThermostat = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 2.75c-1.45 0-2.761.587-3.712 1.538a.75.75 0 0 1-1.061-1.061A6.73 6.73 0 0 1 12 1.25c1.864 0 3.552.756 4.773 1.977a.75.75 0 0 1-1.06 1.06A5.23 5.23 0 0 0 12 2.75m0 3a2.24 2.24 0 0 0-1.591.659.75.75 0 0 1-1.06-1.06A3.74 3.74 0 0 1 12 4.25a3.74 3.74 0 0 1 2.652 1.098.75.75 0 0 1-1.061 1.061A2.24 2.24 0 0 0 12 5.75"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M12 8a2 2 0 0 0-2 2v6.764a3 3 0 1 0 4 0V10a2 2 0 0 0-2-2"
      opacity={0.4}
    />
    <circle cx={12} cy={19} r={1} fill="currentColor" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M16.25 9a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75M16.25 12a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75M16.25 15a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
      opacity={0.4}
    />
  </svg>
);
export default SvgThermostat;
