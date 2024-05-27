import * as React from "react";
import type { SVGProps } from "react";
const SvgLifebuoy = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M16 2H8c-1.387 0-2.663.47-3.68 1.26l5.432 5.431A4 4 0 0 1 12 8c.834 0 1.608.255 2.248.691l5.431-5.43A5.97 5.97 0 0 0 16 2m4.74 2.32-5.431 5.432c.436.64.691 1.414.691 2.248s-.255 1.608-.691 2.248l5.43 5.431A5.97 5.97 0 0 0 22 16V8c0-1.387-.47-2.663-1.26-3.68m-1.06 16.42-5.432-5.431A4 4 0 0 1 12 16a4 4 0 0 1-2.248-.691l-5.431 5.43A5.97 5.97 0 0 0 8 22h8c1.387 0 2.663-.47 3.68-1.26M3.26 19.68l5.431-5.432A4 4 0 0 1 8 12c0-.834.255-1.607.691-2.248L3.261 4.32A5.97 5.97 0 0 0 2 8v8c0 1.387.47 2.663 1.26 3.68"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLifebuoy;
