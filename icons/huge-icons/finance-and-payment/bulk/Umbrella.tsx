import * as React from "react";
import type { SVGProps } from "react";
const SvgUmbrella = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 21.25c.69 0 1.25-.56 1.25-1.25v-8a.75.75 0 0 1 1.5 0v8a2.75 2.75 0 1 1-5.5 0 .75.75 0 0 1 1.5 0c0 .69.56 1.25 1.25 1.25"
      clipRule="evenodd"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M12 2c4.308 0 8.66 3.778 9.744 8.022C22.017 11.092 21.104 12 20 12H4c-1.105 0-2.017-.908-1.744-1.978C3.339 5.778 7.692 2 12 2"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M12 2c2.21 0 4 4.477 4 10H8C8 6.477 9.79 2 12 2"
    />
  </svg>
);
export default SvgUmbrella;
