import * as React from "react";
import type { SVGProps } from "react";
const SvgCloudHalfMoon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13.5 12.43a5 5 0 0 1 1.939-1.181m0 0A5 5 0 0 1 17 11c1.102 0 2.12.356 2.947.96m-4.508-.711a7.03 7.03 0 0 0-3.433-3.573m0 0A5 5 0 0 1 16.106 3a4 4 0 0 0 5.867 4.4q.027.257.027.52c0 1.66-.809 3.13-2.053 4.04m-7.941-4.284A7 7 0 1 0 9 21h8a5 5 0 0 0 2.947-9.04"
    />
  </svg>
);
export default SvgCloudHalfMoon;
