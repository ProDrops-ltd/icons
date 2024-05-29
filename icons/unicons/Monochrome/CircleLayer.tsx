import * as React from "react";
import type { SVGProps } from "react";
const SvgCircleLayer = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#C1C0FF"
      d="M15 2a7 7 0 0 0-6.88 5.737 6 6 0 0 1 8.144 8.143A6.997 6.997 0 0 0 15 2"
    />
    <path fill="#6563FF" d="M7 22a5 5 0 1 0 0-10 5 5 0 0 0 0 10" />
    <path
      fill="#A2A1FF"
      d="M11 7a6 6 0 0 0-5.97 5.406 4.997 4.997 0 0 1 6.564 6.564A6 6 0 0 0 11 7"
    />
  </svg>
);
export default SvgCircleLayer;
