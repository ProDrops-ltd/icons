import * as React from "react";
import type { SVGProps } from "react";
const SvgRedo = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19.875 8.5h-4.5a1 1 0 1 1 0-2h3.5V3a1 1 0 0 1 2 0v4.5a1 1 0 0 1-1 1"
    />
    <path
      fill="#6563FF"
      d="M12 22a10 10 0 1 1 8.651-15.001 1 1 0 0 1-1.73 1.002A7.989 7.989 0 1 0 20 12a1 1 0 0 1 2 0 10.01 10.01 0 0 1-10 10"
    />
  </svg>
);
export default SvgRedo;
