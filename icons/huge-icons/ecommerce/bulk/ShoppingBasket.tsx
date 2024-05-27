import * as React from "react";
import type { SVGProps } from "react";
const SvgShoppingBasket = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 2.75c-.69 0-1.25.56-1.25 1.25v3a.75.75 0 0 1-1.5 0V4A2.75 2.75 0 0 1 8 1.25h8A2.75 2.75 0 0 1 18.75 4v3a.75.75 0 0 1-1.5 0V4c0-.69-.56-1.25-1.25-1.25z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M20.282 18.808A3.97 3.97 0 0 1 16.4 22H7.6a3.97 3.97 0 0 1-3.882-3.192l-1.635-8C1.576 8.326 3.454 6 5.965 6h12.07c2.511 0 4.39 2.326 3.882 4.808z"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M18.035 6H5.965C3.729 6 1.995 7.844 2 10h20c.005-2.156-1.73-4-3.965-4"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M9 13.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75M15 13.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgShoppingBasket;
