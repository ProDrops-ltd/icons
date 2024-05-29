import * as React from "react";
import type { SVGProps } from "react";
const SvgToggleOff = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.5 17.5h-9a5.5 5.5 0 1 1 0-11h9a5.5 5.5 0 1 1 0 11"
    />
    <path fill="#6563FF" d="M7.5 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
  </svg>
);
export default SvgToggleOff;
