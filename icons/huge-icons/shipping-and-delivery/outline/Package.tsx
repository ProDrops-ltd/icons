import * as React from "react";
import type { SVGProps } from "react";
const SvgPackage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <rect
      width={12}
      height={12}
      x={6}
      y={6}
      stroke="currentColor"
      strokeWidth={1.5}
      rx={3}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 2v1M12 21v1M20.071 3.929l-.707.707M4.636 19.364l-.707.707M22 12h-1M13 9h-2M3 12H2M20.071 20.071l-.707-.707M4.636 4.636l-.707-.707"
    />
  </svg>
);
export default SvgPackage;
