import * as React from "react";
import type { SVGProps } from "react";
const SvgDeliveryParachute = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <rect
      width={10}
      height={10}
      x={7}
      y={12}
      stroke="currentColor"
      strokeWidth={1.5}
      rx={2}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 2C7.582 2 4 4.686 4 8c0-1.105 1.79-2 4-2s4 .895 4 2c0-1.105 1.79-2 4-2s4 .895 4 2c0-3.314-3.582-6-8-6M13 14h-2M20 8l-5 4m-3-4v4M4 8l5 4"
    />
  </svg>
);
export default SvgDeliveryParachute;
