import * as React from "react";
import type { SVGProps } from "react";
const SvgChartArrowDown = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 1.25a.75.75 0 0 1 .75.75v16A3.25 3.25 0 0 0 6 21.25h16a.75.75 0 0 1 0 1.5H6A4.75 4.75 0 0 1 1.25 18V2A.75.75 0 0 1 2 1.25"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M14.75 15c0 .414.336.75.75.75h1.882a1.75 1.75 0 0 0 1.565-.967l.724-1.448a.75.75 0 1 0-1.342-.67l-.491.982-2.446-3.731a1.75 1.75 0 0 0-2.961.053l-1.908 3.153a.25.25 0 0 1-.434-.01l-2.43-4.47a.75.75 0 1 0-1.318.716l2.43 4.47c.646 1.187 2.335 1.226 3.035.07l1.908-3.152a.25.25 0 0 1 .423-.008l2.302 3.512H15.5a.75.75 0 0 0-.75.75"
      clipRule="evenodd"
      opacity={0.4}
    />
  </svg>
);
export default SvgChartArrowDown;
