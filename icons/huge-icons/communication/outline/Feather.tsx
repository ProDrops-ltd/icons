import * as React from "react";
import type { SVGProps } from "react";
const SvgFeather = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m2 22 10.067-10.067m5.842-.28c.5 0 .977-.224 1.27-.63a15.6 15.6 0 0 0 2.802-6.958 1.8 1.8 0 0 0-2.047-2.046c-6.888.968-12.338 6.418-13.306 13.306a1.8 1.8 0 0 0 2.046 2.047 15.6 15.6 0 0 0 6.959-2.802c.405-.293.629-.77.629-1.27 0-.91.738-1.647 1.647-1.647"
    />
  </svg>
);
export default SvgFeather;
