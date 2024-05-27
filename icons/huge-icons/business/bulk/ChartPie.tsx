import * as React from "react";
import type { SVGProps } from "react";
const SvgChartPie = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 2a10 10 0 1 1-7.071 17.071l3.56-3.56A4.964 4.964 0 1 0 12 7.035z"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M4.929 19.071A10 10 0 0 1 12 2v5.036a4.964 4.964 0 0 0-3.51 8.474zM22 12a10 10 0 0 1-2.929 7.071l-3.56-3.56A4.96 4.96 0 0 0 16.963 12z"
    />
  </svg>
);
export default SvgChartPie;
