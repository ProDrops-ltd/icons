import * as React from "react";
import type { SVGProps } from "react";
const SvgPlaylist1 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21 14.139V20a2 2 0 0 1-2 2H5c-.627 0-1.145-.317-1.476-.591-.281-.233-.418-.585-.461-.947L3 19.929v-.026c0-.377.303-1.767 1.863-1.9H17c3.91-.266 4-3.864 4-3.864"
    />
    <path
      fill="currentColor"
      d="M21 6v8a4 4 0 0 1-4 4H5a2 2 0 0 0-2 2V6a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="m14.317 11.342-3.146 1.573A1.5 1.5 0 0 1 9 11.573V8.427a1.5 1.5 0 0 1 2.17-1.342l3.147 1.573c1.105.553 1.105 2.13 0 2.684"
    />
  </svg>
);
export default SvgPlaylist1;
