import * as React from "react";
import type { SVGProps } from "react";
const SvgAlignCenter = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 2v3m0 6v2m0 6v3m6-8.5H6a2 2 0 0 0-2 2V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1.5a2 2 0 0 0-2-2ZM15 5H9a2 2 0 0 0-2 2v1.5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"
    />
  </svg>
);
export default SvgAlignCenter;
