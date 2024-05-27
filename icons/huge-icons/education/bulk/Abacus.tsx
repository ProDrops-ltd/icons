import * as React from "react";
import type { SVGProps } from "react";
const SvgAbacus = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.25 8A.75.75 0 0 1 6 7.25h12a.75.75 0 0 1 0 1.5H6A.75.75 0 0 1 5.25 8M5.25 16a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
      opacity={0.4}
    />
    <rect width={4} height={20} x={2} y={2} fill="currentColor" rx={2} />
    <rect width={4} height={20} x={18} y={2} fill="currentColor" rx={2} />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M15 5.75a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75M9 13.75a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75M12 13.75a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75M12 5.75a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgAbacus;
