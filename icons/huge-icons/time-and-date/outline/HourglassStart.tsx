import * as React from "react";
import type { SVGProps } from "react";
const SvgHourglassStart = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.78 9.024a1 1 0 0 1-1.56 0l-1.92-2.4A1 1 0 0 1 10.08 5h3.84a1 1 0 0 1 .78 1.625z"
    />
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M18.4 17.2c1.483 1.978.072 4.8-2.4 4.8H8c-2.472 0-3.883-2.822-2.4-4.8l2.55-3.4a3 3 0 0 0 0-3.6L5.6 6.8C4.117 4.822 5.528 2 8 2h8c2.472 0 3.883 2.822 2.4 4.8l-2.55 3.4a3 3 0 0 0 0 3.6z"
    />
  </svg>
);
export default SvgHourglassStart;
