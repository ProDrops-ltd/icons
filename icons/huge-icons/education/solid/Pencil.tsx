import * as React from "react";
import type { SVGProps } from "react";
const SvgPencil = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20.184 3.816a2.787 2.787 0 0 0-3.942 0l-1.405 1.405 3.941 3.942 1.406-1.405a2.787 2.787 0 0 0 0-3.942m-2.466 6.407-3.941-3.941-8.99 8.99c-.56.56-.94 1.277-1.088 2.055l-.424 2.229a1 1 0 0 0 1.17 1.17l2.228-.425a3.95 3.95 0 0 0 2.055-1.088z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPencil;
