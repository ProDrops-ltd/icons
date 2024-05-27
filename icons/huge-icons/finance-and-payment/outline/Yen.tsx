import * as React from "react";
import type { SVGProps } from "react";
const SvgYen = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 11h12M6 15h12M6 3l6 8 6-8M12 11v10"
    />
  </svg>
);
export default SvgYen;
