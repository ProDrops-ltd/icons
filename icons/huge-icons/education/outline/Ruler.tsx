import * as React from "react";
import type { SVGProps } from "react";
const SvgRuler = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m18.236 8.882 1.56 1.559M15.117 12l1.56 1.559M12 15.119l1.56 1.558m-4.678 1.56 1.56 1.558m-1.56 1.56L21.354 8.881a2.205 2.205 0 0 0 0-3.118l-3.118-3.118a2.205 2.205 0 0 0-3.118 0L2.646 15.118a2.205 2.205 0 0 0 0 3.118l3.118 3.118a2.205 2.205 0 0 0 3.118 0"
    />
  </svg>
);
export default SvgRuler;
