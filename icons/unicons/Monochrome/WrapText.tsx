import * as React from "react";
import type { SVGProps } from "react";
const SvgWrapText = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21 7.167H3a1 1 0 1 1 0-2h18a1 1 0 1 1 0 2m-12 10H3a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2"
    />
    <path
      fill="#6563FF"
      d="M18.5 17.167H15a1 1 0 0 1 0-2h3.5a1.5 1.5 0 1 0 0-3H3a1 1 0 0 1 0-2h15.5a3.5 3.5 0 1 1 0 7"
    />
    <path
      fill="#6563FF"
      d="M14.999 18.833a1 1 0 0 1-.639-.232l-2-1.666a1 1 0 0 1 0-1.537l2-1.667a1 1 0 1 1 1.28 1.537l-1.078.898 1.078.898a1 1 0 0 1-.641 1.769"
    />
  </svg>
);
export default SvgWrapText;
