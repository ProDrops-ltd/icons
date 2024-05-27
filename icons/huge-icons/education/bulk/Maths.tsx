import * as React from "react";
import type { SVGProps } from "react";
const SvgMaths = (props: SVGProps<SVGSVGElement>) => (
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
    <path fill="currentColor" d="M22 7H2V6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4z" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11.33 10.665a.75.75 0 0 1 .67-.415h5a.75.75 0 0 1 0 1.5h-4.536L9.67 17.335a.75.75 0 0 1-1.295.081l-2-3a.75.75 0 1 1 1.248-.832l1.283 1.925z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M13.47 13.47a.75.75 0 0 1 1.06 0l.97.97.97-.97a.75.75 0 1 1 1.06 1.06l-.97.97.97.97a.75.75 0 1 1-1.06 1.06l-.97-.97-.97.97a.75.75 0 1 1-1.06-1.06l.97-.97-.97-.97a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMaths;
