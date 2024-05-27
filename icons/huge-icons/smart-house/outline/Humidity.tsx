import * as React from "react";
import type { SVGProps } from "react";
const SvgHumidity = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.75 18a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.243 13.757A5.98 5.98 0 0 0 12 12a5.98 5.98 0 0 0-4.243 1.757M9.88 15.88A3 3 0 0 1 12 15a3 3 0 0 1 2.121.879M20 14c0-4.163-4.546-8.87-6.784-10.933a1.78 1.78 0 0 0-2.431 0C8.546 5.13 4 9.837 4 14c0 5.523 4.213 8 8 8s8-2.477 8-8"
    />
  </svg>
);
export default SvgHumidity;
