import * as React from "react";
import type { SVGProps } from "react";
const SvgRecord = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m0 18a8 8 0 1 1 0-16.001A8 8 0 0 1 12 20m0-14a6 6 0 1 0 0 12 6 6 0 0 0 0-12m0 10a4 4 0 1 1 0-8 4 4 0 0 1 0 8"
    />
  </svg>
);
export default SvgRecord;
