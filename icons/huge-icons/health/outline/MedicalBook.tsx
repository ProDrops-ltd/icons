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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15 9H9M12 12V6"
    />
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M20 16H7a3 3 0 0 0-3 3m0 0a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3z"
    />
  </svg>
);
export default SvgMedicalBook;
