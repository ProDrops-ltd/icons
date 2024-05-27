import * as React from "react";
import type { SVGProps } from "react";
const SvgSignal = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20.678 3.25a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-1.5 0V4a.75.75 0 0 1 .75-.75m-4 3a.75.75 0 0 1 .75.75v13a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75M13.427 10a.75.75 0 0 0-1.5 0v10a.75.75 0 0 0 1.5 0zm-4.75 2.25a.75.75 0 0 1 .75.75v7a.75.75 0 0 1-1.5 0v-7a.75.75 0 0 1 .75-.75m-6.087-.658 1.337 1.671V20a.75.75 0 0 0 1.5 0v-6.737l1.336-1.671c1.4-1.75.154-4.342-2.086-4.342-2.241 0-3.487 2.592-2.087 4.342"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSignal;
