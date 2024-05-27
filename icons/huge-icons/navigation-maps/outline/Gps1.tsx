import * as React from "react";
import type { SVGProps } from "react";
const SvgGps1 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={12} cy={12} r={8} stroke="currentColor" strokeWidth={1.5} />
    <circle cx={12} cy={12} r={3} stroke="currentColor" strokeWidth={1.5} />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12 4V2M12 22v-2M20 12h2M2 12h2"
    />
  </svg>
);
export default SvgGps1;
