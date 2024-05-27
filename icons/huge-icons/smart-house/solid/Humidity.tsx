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
      fillRule="evenodd"
      d="M20 14c0-4.163-4.546-8.87-6.784-10.933a1.78 1.78 0 0 0-2.431 0C8.546 5.13 4 9.837 4 14c0 5.523 4.213 8 8 8s8-2.477 8-8m-8 4.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m-3.712-4.462A5.23 5.23 0 0 1 12 12.75c1.45 0 2.761.587 3.712 1.538a.75.75 0 1 0 1.06-1.061A6.73 6.73 0 0 0 12 11.25a6.73 6.73 0 0 0-4.773 1.977.75.75 0 0 0 1.06 1.06m2.121 2.121A2.24 2.24 0 0 1 12 15.75a2.24 2.24 0 0 1 1.591.659.75.75 0 1 0 1.06-1.06A3.74 3.74 0 0 0 12 14.25a3.74 3.74 0 0 0-2.652 1.098.75.75 0 1 0 1.061 1.061"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgHumidity;
