import * as React from "react";
import type { SVGProps } from "react";
const SvgReceipt = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19 2H5a2 2 0 0 0-2 2v15.154a2 2 0 0 0 2.677 1.882l1.562-.562a2 2 0 0 1 1.498.058l2.442 1.099a2 2 0 0 0 1.642 0l2.442-1.1a2 2 0 0 1 1.498-.057l1.562.562A2 2 0 0 0 21 19.154V4a2 2 0 0 0-2-2"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M17.75 7a.75.75 0 0 1-.75.75H7a.75.75 0 0 1 0-1.5h10a.75.75 0 0 1 .75.75M17.75 11a.75.75 0 0 1-.75.75H7a.75.75 0 0 1 0-1.5h10a.75.75 0 0 1 .75.75M12.75 15a.75.75 0 0 1-.75.75H7a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 .75.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgReceipt;
