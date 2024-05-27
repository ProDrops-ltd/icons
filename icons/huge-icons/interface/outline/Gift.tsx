import * as React from "react";
import type { SVGProps } from "react";
const SvgGift = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 11h16M4 11a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2M4 11v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-9m-8-5h4a2 2 0 1 0 0-4 4 4 0 0 0-4 4Zm0 0H8a2 2 0 1 1 0-4 4 4 0 0 1 4 4Zm0 0v16"
    />
  </svg>
);
export default SvgGift;
