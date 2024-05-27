import * as React from "react";
import type { SVGProps } from "react";
const SvgCartesian = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22 11v2M2 11v2M12 2v20m10-10H2m9 10h2M11 2h2m-2 5.5h2m-2 9h2m3.5-5.5v2m-9-2v2M6 2l1 1m0 0 1-1M7 3v1m13 12 1 1m0 0 1-1m-1 1-1 1m1-1 1 1"
    />
  </svg>
);
export default SvgCartesian;
