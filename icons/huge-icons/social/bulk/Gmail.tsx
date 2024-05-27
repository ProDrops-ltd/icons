import * as React from "react";
import type { SVGProps } from "react";
const SvgGmail = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 7a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M18 3H6a4 4 0 0 0-4 4l7.501 6.001a4 4 0 0 0 4.998 0L22 7a4 4 0 0 0-4-4"
    />
  </svg>
);
export default SvgGmail;
