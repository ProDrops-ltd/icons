import * as React from "react";
import type { SVGProps } from "react";
const SvgContrast = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#000"
      d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m-1 17.93a8 8 0 0 1 0-15.86zm2 0V4.07a8 8 0 0 1 0 15.86"
    />
  </svg>
);
export default SvgContrast;
