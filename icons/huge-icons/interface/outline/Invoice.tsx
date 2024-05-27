import * as React from "react";
import type { SVGProps } from "react";
const SvgInvoice = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="M8 7h4m-4 4h8m-8 4h8M5 2h14a2 2 0 0 1 2 2v15.154a2 2 0 0 1-2.677 1.882l-1.562-.562a2 2 0 0 0-1.498.058L12.82 21.63a2 2 0 0 1-1.642 0l-2.442-1.1a2 2 0 0 0-1.498-.057l-1.562.562A2 2 0 0 1 3 19.154V4a2 2 0 0 1 2-2Z"
    />
  </svg>
);
export default SvgInvoice;
