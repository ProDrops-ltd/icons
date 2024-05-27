import * as React from "react";
import type { SVGProps } from "react";
const SvgDirectionDownRectangle = (props: SVGProps<SVGSVGElement>) => (
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6 2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8 8 2.8 2.1a2 2 0 0 0 2.4 0L16 8M8 13l2.8 2.1a2 2 0 0 0 2.4 0L16 13"
    />
  </svg>
);
export default SvgDirectionDownRectangle;
