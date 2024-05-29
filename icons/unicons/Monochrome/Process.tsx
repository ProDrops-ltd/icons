import * as React from "react";
import type { SVGProps } from "react";
const SvgProcess = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#6563FF"
      d="M8.625 8.5h-4.5a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v3.5h3.5a1 1 0 0 1 0 2"
    />
    <path
      fill="#6563FF"
      d="M21 13a.997.997 0 0 1-1-1A7.995 7.995 0 0 0 5.079 8.001a1 1 0 0 1-1.73-1.002A9.995 9.995 0 0 1 21.999 12a1 1 0 0 1-1 1m-1.125 9a.997.997 0 0 1-1-1v-3.5h-3.5a1 1 0 1 1 0-2h4.5a1 1 0 0 1 1 1V21a1 1 0 0 1-1 1"
    />
    <path
      fill="#6563FF"
      d="M12 22A10.01 10.01 0 0 1 2 12a1 1 0 1 1 2 0 7.995 7.995 0 0 0 14.92 3.999 1 1 0 0 1 1.731 1.002A10.03 10.03 0 0 1 12 22"
    />
  </svg>
);
export default SvgProcess;
