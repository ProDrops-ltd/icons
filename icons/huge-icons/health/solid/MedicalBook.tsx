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
      fillRule="evenodd"
      d="M7 2h10a3 3 0 0 1 3 3v9.5H7a4.48 4.48 0 0 0-3 1.146V5a3 3 0 0 1 3-3m5 3.25a.75.75 0 0 1 .75.75v2.25H15a.75.75 0 0 1 0 1.5h-2.25V12a.75.75 0 0 1-1.5 0V9.75H9a.75.75 0 0 1 0-1.5h2.25V6a.75.75 0 0 1 .75-.75M7 16h13v3a3 3 0 0 1-3 3H7a3 3 0 1 1 0-6"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMedicalBook;
