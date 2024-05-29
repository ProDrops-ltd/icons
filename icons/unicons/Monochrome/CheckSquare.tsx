import * as React from "react";
import type { SVGProps } from "react";
const SvgCheckSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#6563FF"
      d="M10.2 16.4a1 1 0 0 1-.707-.293l-3.2-3.2a1 1 0 0 1 1.414-1.414l2.493 2.493 6.093-6.093a1 1 0 0 1 1.414 1.414l-6.8 6.8a1 1 0 0 1-.707.293"
    />
    <path
      fill="#A2A1FF"
      d="M21 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m-3.293 7.307-6.8 6.8a1 1 0 0 1-1.414 0l-3.2-3.2a1 1 0 0 1 1.414-1.414l2.493 2.493 6.093-6.093a1 1 0 0 1 1.414 1.414"
    />
  </svg>
);
export default SvgCheckSquare;
