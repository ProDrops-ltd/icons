import * as React from "react";
import type { SVGProps } from "react";
const SvgBookAdd = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18 15v6M5 8.255c1.266.196 2.678.522 4 1.033m-4 2.967c.64.099 1.316.23 2 .403m5-6.605V21c-.24 0-.48-.072-.683-.215-2.124-1.488-5.104-2.162-7.323-2.413C2.896 18.248 2 17.332 2 16.2V4.935c0-1.131.896-2.048 1.994-1.924 2.219.251 5.2.925 7.323 2.413.408.286.958.286 1.366 0 2.124-1.488 5.104-2.162 7.323-2.413C21.104 2.887 22 3.804 22 4.935V14m-1 4h-6"
    />
  </svg>
);
export default SvgBookAdd;
