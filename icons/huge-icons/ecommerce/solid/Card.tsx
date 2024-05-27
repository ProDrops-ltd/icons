import * as React from "react";
import type { SVGProps } from "react";
const SvgCard = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 7.75v2.5h20v-2.5zm19.93-1.5H2.07A4 4 0 0 1 6 3h12c1.953 0 3.579 1.4 3.93 3.25M2 11.75h20V17a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4zm4 4.5a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCard;
