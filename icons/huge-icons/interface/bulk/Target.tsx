import * as React from "react";
import type { SVGProps } from "react";
const SvgTarget = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={12} cy={12} r={10} fill="currentColor" opacity={0.4} />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 7.75a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5M6.25 12a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0"
      clipRule="evenodd"
    />
    <circle cx={12} cy={12} r={1} fill="currentColor" />
  </svg>
);
export default SvgTarget;
