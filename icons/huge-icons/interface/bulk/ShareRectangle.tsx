import * as React from "react";
import type { SVGProps } from "react";
const SvgShareRectangle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12.376 7.584a.75.75 0 0 1 1.04-.208l3 2a.75.75 0 0 1 .208 1.04l-2 3a.75.75 0 1 1-1.248-.832l1.158-1.737c-1.355.18-2.622.613-3.618 1.277C9.589 13.01 8.75 14.291 8.75 16a.75.75 0 0 1-1.5 0c0-2.29 1.161-4.009 2.834-5.124 1.078-.719 2.371-1.192 3.726-1.434l-1.226-.818a.75.75 0 0 1-.208-1.04"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgShareRectangle;
