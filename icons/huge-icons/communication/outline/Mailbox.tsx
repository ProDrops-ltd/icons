import * as React from "react";
import type { SVGProps } from "react";
const SvgMailbox = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17 22v-3m0 0h-3v3m3-3H7m10 0a4 4 0 0 0 4-4v-5a5 5 0 0 0-5-5H8M7 19h2a4 4 0 0 0 4-4v-5a5 5 0 0 0-5-5M7 19a4 4 0 0 1-4-4v-5a5 5 0 0 1 5-5m8 2V4a2 2 0 0 1 2-2h1"
    />
  </svg>
);
export default SvgMailbox;
