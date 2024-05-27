import * as React from "react";
import type { SVGProps } from "react";
const SvgRightArrow = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 15.518V8.482c0-1.544 1.674-2.505 3.008-1.727l6.03 3.517c1.323.772 1.323 2.684 0 3.456l-6.03 3.518C8.674 18.023 7 17.062 7 15.518"
    />
  </svg>
);
export default SvgRightArrow;
