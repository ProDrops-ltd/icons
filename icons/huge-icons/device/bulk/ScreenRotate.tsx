import * as React from "react";
import type { SVGProps } from "react";
const SvgScreenRotate = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.46 11.47a2 2 0 0 1 0-2.829L8.64 5.459a2 2 0 0 1 2.829 0l7.07 7.07a2 2 0 0 1 0 2.83L15.36 18.54a2 2 0 0 1-2.829 0z"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M13.269 3.057a.75.75 0 0 1 .897-.566 9.77 9.77 0 0 1 6.823 5.725l.371-.607a.75.75 0 1 1 1.28.782l-1.223 2a.75.75 0 0 1-1.371-.225 8.26 8.26 0 0 0-6.212-6.212.75.75 0 0 1-.565-.897M3.345 13.26a.75.75 0 0 1 .61.574 8.26 8.26 0 0 0 6.211 6.211.75.75 0 1 1-.332 1.463 9.77 9.77 0 0 1-6.822-5.725l-.372.608a.75.75 0 1 1-1.28-.782l1.223-2a.75.75 0 0 1 .762-.35"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgScreenRotate;
