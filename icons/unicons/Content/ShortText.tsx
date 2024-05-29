import * as React from "react";
import type { SVGProps } from "react";
const SvgShortText = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13 13.5H3a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2m8-5H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2"
    />
  </svg>
);
export default SvgShortText;
