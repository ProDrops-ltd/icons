import * as React from "react";
import type { SVGProps } from "react";
const SvgBorderStyle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.5 18.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9-15a1 1 0 0 0-1-1h-16a1 1 0 0 0-1 1v16a1 1 0 1 0 2 0v-15h15a1 1 0 0 0 1-1m-5 15a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-8 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m12-12a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
    />
  </svg>
);
export default SvgBorderStyle;
