import * as React from "react";
import type { SVGProps } from "react";
const SvgBasket = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#000"
      d="M14 18a1 1 0 0 0 1-1v-2a1 1 0 1 0-2 0v2a1 1 0 0 0 1 1m-4 0a1 1 0 0 0 1-1v-2a1 1 0 1 0-2 0v2a1 1 0 0 0 1 1m9-12h-1.38l-1.73-3.45a.999.999 0 0 0-1.915.515 1 1 0 0 0 .135.385L15.38 6H8.62l1.27-2.55a1 1 0 0 0-1.78-.9L6.38 6H5a3 3 0 0 0-.92 5.84l.74 7.46a3 3 0 0 0 3 2.7h8.38a3 3 0 0 0 3-2.7l.74-7.46A3 3 0 0 0 19 6m-1.81 13.1a1 1 0 0 1-1 .9H7.81a1 1 0 0 1-1-.9L6.1 12h11.8zM19 10H5a1 1 0 1 1 0-2h14a1 1 0 1 1 0 2"
    />
  </svg>
);
export default SvgBasket;
