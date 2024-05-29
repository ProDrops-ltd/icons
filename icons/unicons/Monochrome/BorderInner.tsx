import * as React from "react";
import type { SVGProps } from "react";
const SvgBorderInner = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="#6563FF" d="M19.965 13h-16a1 1 0 0 1 0-2h16a1 1 0 0 1 0 2" />
    <path
      fill="#6563FF"
      d="M11.965 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0v16a1 1 0 0 1-1 1"
    />
    <path
      fill="#A2A1FF"
      d="M3.964 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2M3.964 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2M3.964 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2M3.964 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M7.964 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M15.964 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M7.964 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2M15.964 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2M19.964 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2M19.964 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2M19.964 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2M19.964 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
    />
  </svg>
);
export default SvgBorderInner;
