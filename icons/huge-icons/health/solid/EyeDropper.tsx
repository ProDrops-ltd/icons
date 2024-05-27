import * as React from "react";
import type { SVGProps } from "react";
const SvgEyeDropper = (props: SVGProps<SVGSVGElement>) => (
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
      d="m13.276 5.436.662.647-5.352 5.352a4 4 0 0 0-1.172 2.829v1.171h1.172a4 4 0 0 0 2.828-1.171l5.387-5.386.675.659a.75.75 0 0 0 1.048-1.073l-.663-.647 1.574-1.574a2 2 0 1 0-2.828-2.829l-1.608 1.608-.676-.659a.75.75 0 0 0-1.048 1.073M5.5 22c.828 0 1.5-.395 1.5-1.5S5.5 18 5.5 18 4 19.396 4 20.5 4.672 22 5.5 22"
    />
  </svg>
);
export default SvgEyeDropper;
