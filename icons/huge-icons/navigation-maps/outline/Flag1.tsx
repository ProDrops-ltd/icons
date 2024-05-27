import * as React from "react";
import type { SVGProps } from "react";
const SvgFlag1 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 19v-9m0 0V4a2 2 0 0 1 2-2h5.382a1 1 0 0 1 .894 1.447l-1.052 2.106a1 1 0 0 0 0 .894l1.052 2.106A1 1 0 0 1 19.382 10z"
    />
  </svg>
);
export default SvgFlag1;
