import * as React from "react";
import type { SVGProps } from "react";
const SvgTriangle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21 20.794H3a.999.999 0 0 1-.866-1.5l9-15.587a1.04 1.04 0 0 1 1.732 0l9 15.587a1 1 0 0 1-.866 1.5"
    />
  </svg>
);
export default SvgTriangle;
