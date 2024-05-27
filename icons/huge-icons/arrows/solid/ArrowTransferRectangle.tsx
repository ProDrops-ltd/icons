import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowTransferRectangle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4m-1.47 6.47a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l.72-.72H8a.75.75 0 0 1 0-1.5h6.19l-.72-.72a.75.75 0 0 1 1.06-1.06zm-9.06 6a.75.75 0 0 0 0 1.06l2 2a.75.75 0 1 0 1.06-1.06l-.72-.72H16a.75.75 0 0 0 0-1.5H9.81l.72-.72a.75.75 0 1 0-1.06-1.06z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowTransferRectangle;
