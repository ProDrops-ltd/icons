import * as React from "react";
import type { SVGProps } from "react";
const SvgImageRemove = (props: SVGProps<SVGSVGElement>) => (
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
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M16.47 2.47a.75.75 0 0 1 1.06 0L19 3.94l1.47-1.47a.75.75 0 1 1 1.06 1.06L20.06 5l1.47 1.47a.75.75 0 0 1-1.06 1.06L19 6.06l-1.47 1.47a.75.75 0 1 1-1.06-1.06L17.94 5l-1.47-1.47a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgImageRemove;
