import * as React from "react";
import type { SVGProps } from "react";
const SvgBook = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 8.255c1.266.196 2.678.522 4 1.033m-4 2.967c.64.099 1.316.23 2 .403m5-6.605v14.25M3.994 3.01c2.219.251 5.2.925 7.323 2.413.408.286.958.286 1.366 0 2.124-1.488 5.104-2.162 7.323-2.413C21.104 2.887 22 3.804 22 4.935V16.2c0 1.131-.896 2.048-1.994 2.172-2.219.251-5.2.925-7.323 2.413a1.195 1.195 0 0 1-1.366 0c-2.124-1.488-5.104-2.162-7.323-2.413C2.896 18.248 2 17.332 2 16.2V4.935c0-1.131.896-2.048 1.994-1.924Z"
    />
  </svg>
);
export default SvgBook;
