import * as React from "react";
import type { SVGProps } from "react";
const SvgImage = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M19.061 11.884 22 14v4a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-4l2.939 2.116a4 4 0 0 0 5.013-.273l4.096-3.686a4 4 0 0 1 5.013-.273"
    />
    <circle cx={8.5} cy={8.5} r={2.5} fill="currentColor" />
  </svg>
);
export default SvgImage;
