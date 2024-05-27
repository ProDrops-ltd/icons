import * as React from "react";
import type { SVGProps } from "react";
const SvgGivePill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <rect
      width={6}
      height={12}
      x={16}
      y={2}
      stroke="currentColor"
      strokeWidth={1.5}
      rx={3}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16 8h6M2 10h2l6.262 2.74a1.91 1.91 0 0 1 .99 2.503v0a1.91 1.91 0 0 1-2.509 1.004L7 15.5"
    />
    <path
      fill="currentColor"
      d="M2.335 18.33a.75.75 0 1 0-.67 1.34zm9-3-.67-.336-.671 1.341.67.336zm2.398 2.037-.335.67zm2.683 1.383H18v-1.5h-1.584zM18 21.25H9.889v1.5H18zm-11.354-.765-4.31-2.156-.671 1.342 4.31 2.155zm7.423-3.79-2.734-1.366-.67 1.342 2.733 1.366zm-4.18 4.555a7.25 7.25 0 0 1-3.243-.765l-.67 1.341a8.75 8.75 0 0 0 3.913.924zM19.25 20c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 20.75 20zM18 18.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 18 17.25zm-1.584-1.5a5.25 5.25 0 0 1-2.347-.554l-.671 1.341a6.75 6.75 0 0 0 3.018.713z"
    />
  </svg>
);
export default SvgGivePill;
