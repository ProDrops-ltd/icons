import * as React from "react";
import type { SVGProps } from "react";
const SvgLocation = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21 10.889C21 15.799 15.375 22 12 22s-9-6.202-9-11.111S7.03 2 12 2s9 3.98 9 8.889"
      opacity={0.4}
    />
    <circle cx={12} cy={11} r={3} fill="currentColor" />
  </svg>
);
export default SvgLocation;
