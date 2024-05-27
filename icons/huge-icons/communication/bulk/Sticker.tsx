import * as React from "react";
import type { SVGProps } from "react";
const SvgSticker = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18 3H6a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h4.343a4 4 0 0 0 2.829-1.172l7.656-7.656A4 4 0 0 0 22 9.343V7a4 4 0 0 0-4-4"
      opacity={0.4}
    />
    <path fill="currentColor" d="m12 21 10-10h-4a6 6 0 0 0-6 6z" />
  </svg>
);
export default SvgSticker;
