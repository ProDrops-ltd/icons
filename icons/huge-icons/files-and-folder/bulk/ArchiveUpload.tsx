import * as React from "react";
import type { SVGProps } from "react";
const SvgArchiveUpload = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22 19v-3a3 3 0 0 0-3-3h-1a2 2 0 0 0-1.6.8l-1.2 1.6a4 4 0 0 1-6.4 0l-1.2-1.6A2 2 0 0 0 6 13H5a3 3 0 0 0-3 3v3a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5 13h1a2 2 0 0 1 1.6.8l1.2 1.6a4 4 0 0 0 6.4 0l1.2-1.6A2 2 0 0 1 18 13h1c.35 0 .687.06 1 .17V6a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v7.17c.313-.11.65-.17 1-.17m6.116-6.056a1 1 0 0 1 .134-.116V11a.75.75 0 1 0 1.5 0V6.828q.07.053.134.116L14.47 8.53a.75.75 0 1 0 1.06-1.06l-1.585-1.586a2.75 2.75 0 0 0-3.89 0L8.47 7.47a.75.75 0 0 0 1.06 1.06z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArchiveUpload;
