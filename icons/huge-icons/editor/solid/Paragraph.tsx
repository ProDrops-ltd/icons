import * as React from "react";
import type { SVGProps } from "react";
const SvgParagraph = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9 6.75a2.25 2.25 0 0 0 0 4.5h.25v-4.5zm1.75 0V18a.75.75 0 0 1-1.5 0v-5.25H9a3.75 3.75 0 1 1 0-7.5h9a.75.75 0 0 1 0 1.5h-3.25V18a.75.75 0 0 1-1.5 0V6.75z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgParagraph;
