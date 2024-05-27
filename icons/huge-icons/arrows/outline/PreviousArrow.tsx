import * as React from "react";
import type { SVGProps } from "react";
const SvgPreviousArrow = (props: SVGProps<SVGSVGElement>) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.03 9.667 4.993-2.913c1.333-.777 3.008.184 3.008 1.728v7.036c0 1.543-1.675 2.505-3.008 1.727l-4.992-2.912m0-4.666V8.482c0-1.544-1.675-2.505-3.008-1.728l-6.03 3.518c-1.324.772-1.324 2.684 0 3.455l6.03 3.518c1.333.778 3.008-.184 3.008-1.727v-1.185m0-4.666v4.666"
    />
  </svg>
);
export default SvgPreviousArrow;
