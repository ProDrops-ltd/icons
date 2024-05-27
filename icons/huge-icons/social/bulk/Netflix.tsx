import * as React from "react";
import type { SVGProps } from "react";
const SvgNetflix = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9 20V9.5L4 3v17zM20 3h-5v10l5 7z"
      opacity={0.4}
    />
    <path fill="currentColor" d="M4 3h5l11 17h-5z" />
  </svg>
);
export default SvgNetflix;
