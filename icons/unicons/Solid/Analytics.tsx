import * as React from "react";
import type { SVGProps } from "react";
const SvgAnalytics = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 2c-.6 0-1 .4-1 1v18c0 .6.4 1 1 1s1-.4 1-1V3c0-.6-.4-1-1-1M5 12c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1s1-.4 1-1v-8c0-.6-.4-1-1-1m10-4c-.6 0-1 .4-1 1v12c0 .6.4 1 1 1s1-.4 1-1V9c0-.6-.4-1-1-1m5 8c-.6 0-1 .4-1 1v4c0 .6.4 1 1 1s1-.4 1-1v-4c0-.6-.4-1-1-1"
    />
  </svg>
);
export default SvgAnalytics;
