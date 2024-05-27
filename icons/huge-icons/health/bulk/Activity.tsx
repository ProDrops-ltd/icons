import * as React from "react";
import type { SVGProps } from "react";
const SvgActivity = (props: SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      d="M10.017 7.25c.29.007.55.18.668.445l3.279 7.377 1.34-3.35A.75.75 0 0 1 16 11.25h2a.75.75 0 0 1 0 1.5h-1.492l-1.812 4.529a.75.75 0 0 1-1.381.026L9.96 9.757l-1.29 2.578a.75.75 0 0 1-.67.415H6a.75.75 0 0 1 0-1.5h1.536L9.33 7.665a.75.75 0 0 1 .688-.415"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgActivity;
