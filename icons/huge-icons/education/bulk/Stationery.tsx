import * as React from "react";
import type { SVGProps } from "react";
const SvgStationery = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2zM5 4a2 2 0 1 1 4 0v13.789a4 4 0 0 1-.672 2.219l-.912 1.368a.5.5 0 0 1-.832 0l-.912-1.368A4 4 0 0 1 5 17.788z"
      opacity={0.4}
    />
    <path fill="currentColor" d="M9 6H5V4a2 2 0 1 1 4 0z" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M17.25 6a.75.75 0 0 1 .75-.75h2v1.5h-2a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h2v1.5h-2a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h2v1.5h-2a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h2v1.5h-2a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgStationery;
