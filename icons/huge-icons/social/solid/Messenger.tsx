import * as React from "react";
import type { SVGProps } from "react";
const SvgMessenger = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22 12c0 5.523-4.477 10-10 10a10 10 0 0 1-4.27-.955l-4.356.726a1 1 0 0 1-1.151-1.146l.713-4.396A10 10 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10m-12 0-4 3 4-6 4 3 4-3-4 6z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMessenger;
