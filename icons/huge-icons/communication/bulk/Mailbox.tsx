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
      fill="currentColor"
      d="M16 5H8a5 5 0 0 0-5 5v5a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-5a5 5 0 0 0-5-5"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M17 19v1.5a1.5 1.5 0 1 1-3 0V19zM13 15v-5a5 5 0 0 0-10 0v5a4 4 0 0 0 4 4h2a4 4 0 0 0 4-4"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M17.508 1.973c-.69 0-1.25.338-1.25.756V5h-1.5V2.73c0-.92 1.23-1.665 2.75-1.665h1c.414 0 .75.204.75.455 0 .25-.336.454-.75.454z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMailbox;
