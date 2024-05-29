import * as React from "react";
import type { SVGProps } from "react";
const SvgMultiply = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 18a1 1 0 0 1-.707-1.707l10-10a1 1 0 0 1 1.414 1.414l-10 10A1 1 0 0 1 7 18"
    />
    <path
      fill="#6563FF"
      d="M17 18a1 1 0 0 1-.707-.293l-10-10a1 1 0 0 1 1.414-1.414l10 10A1 1 0 0 1 17 18"
    />
  </svg>
);
export default SvgMultiply;
