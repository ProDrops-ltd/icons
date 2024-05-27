import * as React from "react";
import type { SVGProps } from "react";
const SvgNib = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 6h10a2 2 0 1 0 0-4H7a2 2 0 1 0 0 4m5.952 15.526 5.296-6.43a3.95 3.95 0 0 0 .474-3.768L17.491 7.5H6.509l-1.231 3.828a3.94 3.94 0 0 0 .474 3.769l5.296 6.429q.089.123.202.215v-7.886a2 2 0 1 1 1.5 0v7.886q.113-.092.202-.215"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgNib;
