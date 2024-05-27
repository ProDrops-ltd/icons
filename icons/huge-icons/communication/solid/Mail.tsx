import * as React from "react";
import type { SVGProps } from "react";
const SvgMail = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 3a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4zm.416 4.376a.75.75 0 0 0-.832 1.248l3.781 2.52a4.75 4.75 0 0 0 5.27 0l3.781-2.52a.75.75 0 1 0-.832-1.248l-3.781 2.52a3.25 3.25 0 0 1-3.606 0z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMail;
