import * as React from "react";
import type { SVGProps } from "react";
const SvgTimeCheck = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 5.25a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 .75-.75m-.97 7.72a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 0 1-1.06-1.06l1.5-1.5a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
    <path fill="currentColor" d="M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M22.494 17.436a.75.75 0 0 1 .07 1.058l-2.87 3.28a1.75 1.75 0 0 1-2.41.214l-1.752-1.402a.75.75 0 0 1 .936-1.172l1.753 1.403a.25.25 0 0 0 .345-.031l2.87-3.28a.75.75 0 0 1 1.058-.07"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTimeCheck;
