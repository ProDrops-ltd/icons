import * as React from "react";
import type { SVGProps } from "react";
const SvgMoneyPound = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <rect
      width={20}
      height={16}
      x={2}
      y={4}
      stroke="currentColor"
      strokeWidth={1.5}
      rx={4}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9 12h4M14 9.882v-.497C14 8.62 13.38 8 12.615 8v0c-.764 0-1.384.62-1.384 1.385v.57a6.16 6.16 0 0 1-1.485 4.01v0c-.686.8-.118 2.035.934 2.035H14"
    />
  </svg>
);
export default SvgMoneyPound;
