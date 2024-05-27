import * as React from "react";
import type { SVGProps } from "react";
const SvgNotificationRectangle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18 11.9A5.002 5.002 0 0 0 17 2a5 5 0 0 0-5 5 5 5 0 0 0 6 4.9M6 6h4.576q-.076.49-.076 1a6.5 6.5 0 0 0 7.5 6.424V18a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-8a4 4 0 0 1 4-4"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgNotificationRectangle;
