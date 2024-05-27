import * as React from "react";
import type { SVGProps } from "react";
const SvgSmartLock = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 2.75A3.25 3.25 0 0 0 8.75 6v3a.75.75 0 0 1-1.5 0V6a4.75 4.75 0 0 1 9.5 0v3a.75.75 0 0 1-1.5 0V6A3.25 3.25 0 0 0 12 2.75"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M4 12a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M12.75 18a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 12.75c-1.45 0-2.761.587-3.712 1.538a.75.75 0 1 1-1.061-1.061A6.73 6.73 0 0 1 12 11.25c1.864 0 3.552.756 4.773 1.977a.75.75 0 0 1-1.06 1.06A5.23 5.23 0 0 0 12 12.75m0 3a2.24 2.24 0 0 0-1.591.659.75.75 0 1 1-1.06-1.06A3.74 3.74 0 0 1 12 14.25a3.74 3.74 0 0 1 2.652 1.098.75.75 0 0 1-1.061 1.061A2.24 2.24 0 0 0 12 15.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSmartLock;
