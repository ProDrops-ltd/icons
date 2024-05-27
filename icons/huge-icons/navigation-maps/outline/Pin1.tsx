import * as React from "react";
import type { SVGProps } from "react";
const SvgPin1 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 10.172V7.828a2 2 0 0 0-.586-1.414C5.154 5.154 6.047 3 7.828 3h8.344c1.781 0 2.674 2.154 1.414 3.414A2 2 0 0 0 17 7.828v2.344a2 2 0 0 0 .586 1.414c1.26 1.26.367 3.414-1.414 3.414H7.828c-1.781 0-2.674-2.154-1.414-3.414A2 2 0 0 0 7 10.172ZM12 15v6"
    />
  </svg>
);
export default SvgPin1;
