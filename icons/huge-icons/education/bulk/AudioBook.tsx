import * as React from "react";
import type { SVGProps } from "react";
const SvgAudioBook = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3z"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M10 7.618a1 1 0 0 1 1.447-.894l2.764 1.382a1 1 0 0 1 0 1.788l-2.764 1.382A1 1 0 0 1 10 10.382zM4 19a3 3 0 0 1 3-3h13v3a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3"
    />
  </svg>
);
export default SvgAudioBook;
