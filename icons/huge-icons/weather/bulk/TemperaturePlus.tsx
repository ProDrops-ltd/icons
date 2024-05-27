import * as React from "react";
import type { SVGProps } from "react";
const SvgTemperaturePlus = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 22a5 5 0 0 0 3-9V5a3 3 0 1 0-6 0v8a5 5 0 0 0 3 9"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12.75 5a.75.75 0 0 0-1.5 0v10.145a2 2 0 1 0 1.5 0zM20 1.25a.75.75 0 0 1 .75.75v1.25H22a.75.75 0 0 1 0 1.5h-1.25V6a.75.75 0 0 1-1.5 0V4.75H18a.75.75 0 0 1 0-1.5h1.25V2a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTemperaturePlus;
