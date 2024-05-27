import * as React from "react";
import type { SVGProps } from "react";
const SvgDownArrow = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.518 7H8.482C6.94 7 5.977 8.674 6.755 10.008l3.517 6.03c.772 1.323 2.684 1.323 3.456 0l3.518-6.03C18.023 8.674 17.062 7 15.518 7"
      opacity={0.4}
    />
  </svg>
);
export default SvgDownArrow;
