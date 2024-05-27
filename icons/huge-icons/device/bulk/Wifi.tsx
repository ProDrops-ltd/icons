import * as React from "react";
import type { SVGProps } from "react";
const SvgWifi = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="currentColor" d="M13 19a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 4.75a13.2 13.2 0 0 0-8.939 3.47.75.75 0 1 1-1.012-1.108A14.7 14.7 0 0 1 12 3.25a14.7 14.7 0 0 1 9.951 3.862.75.75 0 1 1-1.012 1.107A13.2 13.2 0 0 0 12 4.75m0 5a8.22 8.22 0 0 0-5.719 2.304.75.75 0 1 1-1.04-1.081A9.72 9.72 0 0 1 12 8.25a9.72 9.72 0 0 1 6.759 2.723.75.75 0 1 1-1.04 1.08A8.22 8.22 0 0 0 12 9.75m0 5a3.24 3.24 0 0 0-2.454 1.119.75.75 0 1 1-1.132-.985A4.74 4.74 0 0 1 12 13.25a4.74 4.74 0 0 1 3.585 1.634.75.75 0 1 1-1.131.985A3.24 3.24 0 0 0 12 14.75"
      clipRule="evenodd"
      opacity={0.4}
    />
  </svg>
);
export default SvgWifi;
