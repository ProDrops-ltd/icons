import * as React from "react";
import type { SVGProps } from "react";
const SvgDirectionTool = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18.08 5 10 4.33l-3-.25V3a1 1 0 0 0-2 0v18a1 1 0 1 0 2 0v-7.08l3-.25 8.08-.67a1 1 0 0 0 .92-1V6a1 1 0 0 0-.92-1M9 11.75l-2 .16V6.09l2 .16zm4-.34-2 .17V6.42l2 .17zm4-.33-2 .17v-4.5l2 .17z"
    />
  </svg>
);
export default SvgDirectionTool;
