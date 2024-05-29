import * as React from "react";
import type { SVGProps } from "react";
const SvgMasterCard = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#A2A1FF"
      d="M15.273 18.728A6.727 6.727 0 1 1 22 11.999V12a6.735 6.735 0 0 1-6.727 6.727"
    />
    <path
      fill="#6563FF"
      d="M8.727 18.728A6.728 6.728 0 1 1 15.455 12a6.734 6.734 0 0 1-6.728 6.727"
    />
  </svg>
);
export default SvgMasterCard;
