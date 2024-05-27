import * as React from "react";
import type { SVGProps } from "react";
const SvgTelegram = (props: SVGProps<SVGSVGElement>) => (
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
      d="m3.909 11.095 15.389-6.65a1 1 0 0 1 1.384 1.074l-2.104 13.276a1 1 0 0 1-1.715.53L13.53 15.77a2 2 0 0 1-.125-2.6l2.318-3.24c.14-.18-.08-.416-.27-.29l-4.846 3.253a4 4 0 0 1-2.801.637l-3.644-.527c-.998-.145-1.179-1.508-.253-1.908"
    />
  </svg>
);
export default SvgTelegram;
