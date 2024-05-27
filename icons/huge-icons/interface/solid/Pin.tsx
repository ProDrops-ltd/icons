import * as React from "react";
import type { SVGProps } from "react";
const SvgPin = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.652 3.577c-1.232-1.233-3.34-.36-3.34 1.383 0 .52-.205 1.017-.572 1.384l-1.621 1.62a1.96 1.96 0 0 1-1.383.573c-1.743 0-2.616 2.108-1.384 3.34l2.376 2.376-5.517 5.518a.72.72 0 1 0 1.018 1.018l5.518-5.517 2.376 2.376c1.232 1.232 3.34.36 3.34-1.383 0-.52.206-1.017.573-1.384l1.62-1.62a1.96 1.96 0 0 1 1.384-.574c1.743 0 2.616-2.107 1.383-3.34z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPin;
