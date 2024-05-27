import * as React from "react";
import type { SVGProps } from "react";
const SvgSmartPhone = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.75 14a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.243 9.757A5.98 5.98 0 0 0 12 8a5.98 5.98 0 0 0-4.243 1.757M9.88 11.88A3 3 0 0 1 12 11a3 3 0 0 1 2.121.879M11 19h2M5 6v12a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4"
    />
  </svg>
);
export default SvgSmartPhone;
