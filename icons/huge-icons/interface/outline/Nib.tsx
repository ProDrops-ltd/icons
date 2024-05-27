import * as React from "react";
import type { SVGProps } from "react";
const SvgNib = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M13 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 0v8M8 6h10a2 2 0 1 0 0-4H8a2 2 0 1 0 0 4Zm-.008 0h10.016l1.714 5.328a3.95 3.95 0 0 1-.474 3.769l-5.296 6.429c-.45.632-1.453.632-1.904 0l-5.296-6.43a3.94 3.94 0 0 1-.474-3.768z"
    />
  </svg>
);
export default SvgNib;
