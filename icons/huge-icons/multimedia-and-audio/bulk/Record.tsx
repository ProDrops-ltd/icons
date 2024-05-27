import * as React from "react";
import type { SVGProps } from "react";
const SvgRecord = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19 12a7 7 0 1 1-14 0 7 7 0 0 1 14 0"
      opacity={0.4}
    />
  </svg>
);
export default SvgRecord;
