import * as React from "react";
import type { SVGProps } from "react";
const SvgInvoice1 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0M16 15a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M19 2H5a2 2 0 0 0-2 2v15.154a2 2 0 0 0 2.677 1.882l1.562-.562a2 2 0 0 1 1.498.058l2.442 1.099a2 2 0 0 0 1.642 0l2.442-1.1a2 2 0 0 1 1.498-.057l1.562.562A2 2 0 0 0 21 19.154V4a2 2 0 0 0-2-2ZM9 15l6-6"
    />
  </svg>
);
export default SvgInvoice1;
