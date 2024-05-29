import * as React from "react";
import type { SVGProps } from "react";
const SvgLineSpacing = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#A2A1FF"
      d="M21 8H10a1 1 0 0 1 0-2h11a1 1 0 1 1 0 2m0 5H10a1 1 0 0 1 0-2h11a1 1 0 0 1 0 2"
    />
    <path
      fill="#6563FF"
      d="M4.667 18.5a1 1 0 0 1-1-1v-11a1 1 0 0 1 2 0v11a1 1 0 0 1-1 1"
    />
    <path fill="#A2A1FF" d="M21 18H10a1 1 0 0 1 0-2h11a1 1 0 0 1 0 2" />
    <path
      fill="#6563FF"
      d="M6.334 9a1 1 0 0 1-.77-.36l-.897-1.078-.898 1.079a1 1 0 0 1-1.537-1.282l1.666-2a1.002 1.002 0 0 1 1.538.001l1.666 2A1 1 0 0 1 6.334 9M4.667 19a1 1 0 0 1-.768-.36l-1.667-2a1 1 0 1 1 1.537-1.28l.898 1.078.898-1.078a1 1 0 0 1 1.537 1.28l-1.666 2a1 1 0 0 1-.769.36"
    />
  </svg>
);
export default SvgLineSpacing;
