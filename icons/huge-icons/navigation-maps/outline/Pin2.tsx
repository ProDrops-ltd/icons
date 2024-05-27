import * as React from "react";
import type { SVGProps } from "react";
const SvgPin2 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <ellipse
      cx={12}
      cy={19}
      stroke="currentColor"
      strokeWidth={1.5}
      rx={9}
      ry={3}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0 0v11"
    />
  </svg>
);
export default SvgPin2;
