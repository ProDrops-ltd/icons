import * as React from "react";
import type { SVGProps } from "react";
const SvgFigma = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="currentColor" d="M12 3h3a3 3 0 1 1 0 6h-3z" />
    <path
      fill="currentColor"
      d="M6 6a3 3 0 0 1 3-3h3v6H9a3 3 0 0 1-3-3"
      opacity={0.4}
    />
    <path fill="currentColor" d="M6 12a3 3 0 0 1 3-3h3v6H9a3 3 0 0 1-3-3" />
    <path
      fill="currentColor"
      d="M6 18a3 3 0 0 1 3-3h3v3a3 3 0 1 1-6 0"
      opacity={0.4}
    />
    <circle cx={15} cy={12} r={3} fill="currentColor" opacity={0.4} />
  </svg>
);
export default SvgFigma;
