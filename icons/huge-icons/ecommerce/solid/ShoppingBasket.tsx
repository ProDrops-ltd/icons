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
      d="M5.25 5v1.064C3.62 6.362 2.37 7.66 2.07 9.25h19.86c-.3-1.591-1.55-2.888-3.18-3.186V5A2.75 2.75 0 0 0 16 2.25H8A2.75 2.75 0 0 0 5.25 5M8 3.75c-.69 0-1.25.56-1.25 1.25v1h10.5V5c0-.69-.56-1.25-1.25-1.25zM21.928 10.75H2.072l.011.058 1.635 8A3.97 3.97 0 0 0 7.6 22h8.8a3.97 3.97 0 0 0 3.882-3.192l1.635-8zM9 13.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m6.75.75a.75.75 0 0 0-1.5 0v4a.75.75 0 1 0 1.5 0z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgShoppingBasket;
