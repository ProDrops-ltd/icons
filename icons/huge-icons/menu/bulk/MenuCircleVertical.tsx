import * as React from "react";
import type { SVGProps } from "react";
const SvgMenuCircleVertical = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle
      cx={16.75}
      cy={12.25}
      r={1.25}
      fill="currentColor"
      opacity={0.4}
      transform="rotate(90 16.75 12.25)"
    />
    <circle
      cx={11.75}
      cy={12.25}
      r={1.25}
      fill="currentColor"
      transform="rotate(90 11.75 12.25)"
    />
    <circle
      cx={6.75}
      cy={12.25}
      r={1.25}
      fill="currentColor"
      opacity={0.4}
      transform="rotate(90 6.75 12.25)"
    />
  </svg>
);
export default SvgMenuCircleVertical;
