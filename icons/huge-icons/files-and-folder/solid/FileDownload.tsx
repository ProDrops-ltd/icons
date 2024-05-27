import * as React from "react";
import type { SVGProps } from "react";
const SvgFileDownload = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 5v12.25c0 1.795 1.48 3.25 3.275 3.25 1.768 0 3.225-1.433 3.225-3.2a.8.8 0 0 1 .8-.8H18V5a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3m7.25 6.172a1 1 0 0 1-.134-.117L7.53 9.47a.75.75 0 0 0-1.06 1.06l1.585 1.586a2.75 2.75 0 0 0 3.89 0l1.585-1.586a.75.75 0 0 0-1.06-1.06l-1.586 1.585a1 1 0 0 1-.134.117V7a.75.75 0 0 0-1.5 0zm12.627 7.818A4 4 0 0 1 18 22H6a4 4 0 0 0 3.877-3.01c.136-.535.57-.99 1.123-.99h10c.552 0 1.013.455.877.99"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFileDownload;
