import * as React from "react";
import type { SVGProps } from "react";
const SvgCloudFlash = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13.5 8.43a5 5 0 0 1 1.939-1.181m0 0A5 5 0 0 1 19.5 16.33M15.439 7.25A7.002 7.002 0 0 0 2 10a7 7 0 0 0 3.5 6.064M13 11l-5 6h3v4l5-6h-3z"
    />
  </svg>
);
export default SvgCloudFlash;
