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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9 14v4M15 14v4M6 6V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2M2.587 10h18.826m-3.378-4H5.965c-2.511 0-4.39 2.326-3.882 4.808l1.635 8A3.97 3.97 0 0 0 7.6 22h8.8a3.97 3.97 0 0 0 3.882-3.192l1.635-8C22.424 8.326 20.546 6 18.035 6"
    />
  </svg>
);
export default SvgShoppingBasket;
