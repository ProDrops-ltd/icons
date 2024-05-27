import * as React from "react";
import type { SVGProps } from "react";
const SvgBrowser = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 7h20m-8 5h4m-4 4h4m-10.553.276 2.764-1.382a1 1 0 0 0 0-1.788l-2.764-1.382A1 1 0 0 0 6 12.618v2.764a1 1 0 0 0 1.447.894ZM6 22h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4Z"
    />
  </svg>
);
export default SvgBrowser;
