import * as React from "react";
import type { SVGProps } from "react";
const SvgMedicalBook = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17 2H7a3 3 0 0 0-3 3v14h16V5a3 3 0 0 0-3-3"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 5.25a.75.75 0 0 1 .75.75v2.25H15a.75.75 0 0 1 0 1.5h-2.25V12a.75.75 0 0 1-1.5 0V9.75H9a.75.75 0 0 1 0-1.5h2.25V6a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <path fill="currentColor" d="M20 16H7a3 3 0 1 0 0 6h10a3 3 0 0 0 3-3z" />
  </svg>
);
export default SvgMedicalBook;
