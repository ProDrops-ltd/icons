import * as React from "react";
import type { SVGProps } from "react";
const SvgTextFields = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 6a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2h5v11a1 1 0 1 0 2 0V7h5a1 1 0 0 0 1-1m5 5h-6a1 1 0 0 0 0 2h2v5a1 1 0 0 0 2 0v-5h2a1 1 0 0 0 0-2"
    />
  </svg>
);
export default SvgTextFields;
