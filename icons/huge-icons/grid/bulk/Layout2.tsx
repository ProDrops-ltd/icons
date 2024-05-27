import * as React from "react";
import type { SVGProps } from "react";
const SvgLayout2 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="currentColor" d="M22 18a4 4 0 0 1-4 4H8V8h14z" opacity={0.4} />
    <path
      fill="currentColor"
      d="M2 8V6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v2H12v14H6a4 4 0 0 1-4-4z"
    />
  </svg>
);
export default SvgLayout2;
