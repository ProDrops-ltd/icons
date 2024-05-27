import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowMoveCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12.53 18.53a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l.72.72V7.81l-.72.72a.75.75 0 1 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1-1.06 1.06l-.72-.72v8.38l.72-.72a.75.75 0 1 1 1.06 1.06z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5.47 12.53a.75.75 0 0 1 0-1.06l2-2a.75.75 0 0 1 1.06 1.06l-.72.72h8.38l-.72-.72a.75.75 0 1 1 1.06-1.06l2 2a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l.72-.72H7.81l.72.72a.75.75 0 1 1-1.06 1.06z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowMoveCircle;
