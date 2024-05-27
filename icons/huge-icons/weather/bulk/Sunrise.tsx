import * as React from "react";
import type { SVGProps } from "react";
const SvgSunrise = (props: SVGProps<SVGSVGElement>) => (
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
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 10a6 6 0 0 0-6 6h12a6 6 0 0 0-6-6Z"
      opacity={0.4}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m19.778 8.222-1.414 1.414M4.222 8.222l1.414 1.414"
      opacity={0.4}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10 4 1.293-1.293a1 1 0 0 1 1.414 0L14 4m-2 3V3M4 16h16"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6 19h12"
      opacity={0.4}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M9 22h6"
    />
  </svg>
);
export default SvgSunrise;
