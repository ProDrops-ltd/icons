import * as React from "react";
import type { SVGProps } from "react";
const SvgPencil = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.243 3.816a2.787 2.787 0 0 1 3.94 3.942L8.729 19.213c-.56.56-1.276.94-2.055 1.088l-2.95.562a.5.5 0 0 1-.586-.585l.562-2.95a3.95 3.95 0 0 1 1.088-2.056z"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M20.184 7.758a2.787 2.787 0 1 0-3.942-3.942l-1.856 2.015 3.783 3.783z"
    />
  </svg>
);
export default SvgPencil;
