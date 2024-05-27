import * as React from "react";
import type { SVGProps } from "react";
const SvgWifiOff = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={12.445} cy={19} r={1} fill="currentColor" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m3 3 18 18M21.89 7.666A13.95 13.95 0 0 0 12.445 4c-1.352 0-2.66.192-3.896.55m10.135 6.963a8.97 8.97 0 0 0-5.666-2.495m-3.593 6.358A4 4 0 0 1 12.445 14c.83 0 1.602.253 2.242.687m-8.48-3.174a9 9 0 0 1 3.288-2.018M3 7.665A14 14 0 0 1 5.719 5.72"
    />
  </svg>
);
export default SvgWifiOff;
