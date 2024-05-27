import * as React from "react";
import type { SVGProps } from "react";
const SvgWidgets = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13.1 5.242a2 2 0 0 0 0 2.829l2.829 2.828a2 2 0 0 0 2.828 0l2.829-2.828a2 2 0 0 0 0-2.829l-2.829-2.828a2 2 0 0 0-2.828 0zM4 2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0 12a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zm10 2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgWidgets;
