import * as React from "react";
import type { SVGProps } from "react";
const SvgDownChevron = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#000"
      d="M11.29 11.46a1 1 0 0 0 1.42 0l3-3A1.018 1.018 0 1 0 14.29 7L12 9.34 9.71 7a1.018 1.018 0 1 0-1.42 1.46zm3 1.08L12 14.84l-2.29-2.3A1.019 1.019 0 0 0 8.29 14l3 3a1 1 0 0 0 1.42 0l3-3a1.004 1.004 0 1 0-1.42-1.42z"
    />
  </svg>
);
export default SvgDownChevron;
