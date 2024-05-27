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
      fill="currentColor"
      fillRule="evenodd"
      d="M5 2h14a2 2 0 0 1 2 2v15.154a2 2 0 0 1-2.677 1.882l-1.562-.562a2 2 0 0 0-1.498.058L12.82 21.63a2 2 0 0 1-1.642 0l-2.442-1.1a2 2 0 0 0-1.498-.057l-1.562.562A2 2 0 0 1 3 19.154V4a2 2 0 0 1 2-2m3 4.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5zm0 4a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5zm0 4a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgInvoice;
