import * as React from "react";
import type { SVGProps } from "react";
const SvgCallBlock = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.415 4.476a3 3 0 0 0 4.109 4.109zm5.17 3.048a3 3 0 0 0-4.109-4.109z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M21 19v-1.646a2 2 0 0 0-1.257-1.857l-2.034-.813a2 2 0 0 0-2.532.962L15 16s-2.5-.5-4.5-2.5S8 9 8 9l.354-.177a2 2 0 0 0 .963-2.532l-.814-2.034A2 2 0 0 0 6.646 3H5a2 2 0 0 0-2 2c0 8.837 7.163 16 16 16a2 2 0 0 0 2-2"
      opacity={0.4}
    />
  </svg>
);
export default SvgCallBlock;
