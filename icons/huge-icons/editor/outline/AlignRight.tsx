import * as React from "react";
import type { SVGProps } from "react";
const SvgAlignRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 6h6M6 10h12M12 14h6M6 18h12"
    />
  </svg>
);
export default SvgAlignRight;
