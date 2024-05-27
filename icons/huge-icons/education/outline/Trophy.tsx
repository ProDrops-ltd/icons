import * as React from "react";
import type { SVGProps } from "react";
const SvgTrophy = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 17a6 6 0 0 1-6-6m6 6a6 6 0 0 0 6-6m-6 6v4M6 11V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6M6 11V7a2 2 0 1 0-4 0 4 4 0 0 0 4 4Zm12 0V7a2 2 0 1 1 4 0 4 4 0 0 1-4 4Zm-6 10H9m3 0h3"
    />
  </svg>
);
export default SvgTrophy;
