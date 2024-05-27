import * as React from "react";
import type { SVGProps } from "react";
const SvgSubject = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="M6 6h12M6 10h12M6 14h12M6 18h6"
    />
  </svg>
);
export default SvgSubject;
