import * as React from "react";
import type { SVGProps } from "react";
const SvgSensor = (props: SVGProps<SVGSVGElement>) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.243 7.757A5.98 5.98 0 0 1 18 12a5.98 5.98 0 0 1-1.757 4.242M19.07 4.93A9.97 9.97 0 0 1 22 11.999a9.97 9.97 0 0 1-2.929 7.072m-14.142 0A9.97 9.97 0 0 1 2 12a9.97 9.97 0 0 1 2.929-7.071m2.828 11.313A5.98 5.98 0 0 1 6 12c0-1.657.672-3.157 1.757-4.243M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
    />
  </svg>
);
export default SvgSensor;
