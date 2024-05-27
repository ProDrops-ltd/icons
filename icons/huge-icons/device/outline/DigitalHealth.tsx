import * as React from "react";
import type { SVGProps } from "react";
const SvgDigitalHealth = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="M14 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
    />
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m5.852 15.247 3.719 4.598c1.245 1.54 3.613 1.54 4.858 0l3.72-4.598A3.82 3.82 0 0 0 19 12.845v-.173C19 10.644 17.338 9 15.288 9c-.985 0-1.93.387-2.625 1.076L12 10.73l-.663-.655A3.73 3.73 0 0 0 8.712 9C6.662 9 5 10.644 5 12.672v.173c0 .873.3 1.72.852 2.401Z"
    />
  </svg>
);
export default SvgDigitalHealth;
