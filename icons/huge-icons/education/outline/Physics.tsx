import * as React from "react";
import type { SVGProps } from "react";
const SvgPhysics = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="M15.342 15.342c-4.614 4.614-9.85 6.858-11.696 5.012-1.845-1.845.399-7.082 5.012-11.696 4.614-4.613 9.85-6.858 11.696-5.012 1.846 1.845-.398 7.082-5.012 11.696Z"
    />
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M15.342 8.658c4.613 4.614 6.858 9.85 5.012 11.696-1.845 1.846-7.082-.399-11.696-5.012C4.045 10.728 1.8 5.492 3.646 3.646c1.845-1.846 7.082.399 11.696 5.012Z"
    />
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
    />
  </svg>
);
export default SvgPhysics;
