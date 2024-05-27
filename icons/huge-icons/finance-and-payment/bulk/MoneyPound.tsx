import * as React from "react";
import type { SVGProps } from "react";
const SvgMoneyPound = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 8a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10.48 9.385a2.135 2.135 0 1 1 4.27 0v.497a.75.75 0 1 1-1.5 0v-.497a.635.635 0 1 0-1.27 0v.57q0 .656-.122 1.295H13a.75.75 0 0 1 0 1.5h-1.61a7 7 0 0 1-1.075 1.704.482.482 0 0 0 .365.796H14a.75.75 0 0 1 0 1.5h-3.32c-1.693 0-2.607-1.987-1.504-3.273q.296-.343.527-.727H9a.75.75 0 0 1 0-1.5h1.323c.104-.42.158-.856.158-1.295z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMoneyPound;
