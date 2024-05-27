import * as React from "react";
import type { SVGProps } from "react";
const SvgGlasses = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 16.75c-.69 0-1.25.56-1.25 1.25h-1.5a2.75 2.75 0 1 1 5.5 0h-1.5c0-.69-.56-1.25-1.25-1.25M17.25 3a.75.75 0 0 1 .75-.75A3.75 3.75 0 0 1 21.75 6v11.5a.75.75 0 0 1-1.5 0V6A2.25 2.25 0 0 0 18 3.75a.75.75 0 0 1-.75-.75M6.75 3A.75.75 0 0 0 6 2.25 3.75 3.75 0 0 0 2.25 6v11.5a.75.75 0 0 0 1.5 0V6A2.25 2.25 0 0 1 6 3.75.75.75 0 0 0 6.75 3"
      clipRule="evenodd"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M2.25 17.5a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0M13.25 17.5a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0"
    />
  </svg>
);
export default SvgGlasses;
