import * as React from "react";
import type { SVGProps } from "react";
const SvgPaintBucket = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13.484 3.109a2.98 2.98 0 0 0-4.185 0l-7.044 6.97a2.92 2.92 0 0 0 0 4.165l4.696 4.647a2.98 2.98 0 0 0 4.185 0l6.175-6.11 3.022-1.496a.75.75 0 0 0 .195-1.205zm5.242 7.298-2.032 1.005H3.098q.088-.143.212-.266l7.044-6.971a1.48 1.48 0 0 1 2.075 0zm1.26 10.578c1 0 2-.593 2-2.25s-2-3.75-2-3.75-2 2.093-2 3.75 1 2.25 2 2.25"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPaintBucket;
