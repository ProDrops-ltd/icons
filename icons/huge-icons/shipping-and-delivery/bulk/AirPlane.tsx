import * as React from "react";
import type { SVGProps } from "react";
const SvgAirPlane = (props: SVGProps<SVGSVGElement>) => (
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
      d="m16.684 20.307-1.887-2.565a2.03 2.03 0 0 1-.402-1.204V4.395a2.395 2.395 0 0 0-4.79 0v12.143c0 .428-.14.847-.402 1.204l-1.887 2.564c-.681.927.434 2.071 1.532 1.573l2.08-.943a2.62 2.62 0 0 1 2.143 0l2.081.943c1.099.498 2.213-.646 1.532-1.573"
    />
    <g fill="currentColor" opacity={0.4}>
      <path d="m8.479 8.064-4.914 2.784c-1.02.578-.568 2.005.635 2.005h4.207c.662 0 1.198.486 1.198 1.086V6.224c0 .748-.426 1.444-1.126 1.84M20.435 10.848l-4.914-2.784c-.7-.396-1.126-1.092-1.126-1.84v7.715c0-.6.536-1.085 1.198-1.085H19.8c1.203 0 1.655-1.428.635-2.006" />
    </g>
  </svg>
);
export default SvgAirPlane;
