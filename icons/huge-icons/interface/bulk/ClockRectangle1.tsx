import * as React from "react";
import type { SVGProps } from "react";
const SvgClockRectangle1 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <rect
      width={20}
      height={20}
      x={2}
      y={2}
      fill="currentColor"
      opacity={0.4}
      rx={4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 8.25a.75.75 0 0 1 .75.75v2.382a.25.25 0 0 0 .138.224l1.447.723a.75.75 0 1 1-.67 1.342l-1.448-.724a1.75 1.75 0 0 1-.967-1.565V9a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgClockRectangle1;
