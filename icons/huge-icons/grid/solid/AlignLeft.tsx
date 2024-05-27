import * as React from "react";
import type { SVGProps } from "react";
const SvgAlignLeft = (props: SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      d="M4.75 2a.75.75 0 0 0-1.5 0v20a.75.75 0 0 0 1.5 0v-2H12a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H4.75v-4H18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4.75z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgAlignLeft;
