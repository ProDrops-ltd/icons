import * as React from "react";
import type { SVGProps } from "react";
const SvgStore = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20 12v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-6"
    />
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.769 2H7.23C5.414 2 3.78 3.245 3.105 5.143l-.758 2.132c-.23.645-.388 1.336-.221 2C2.522 10.848 3.808 12 5.333 12c1.841 0 3.334-1.679 3.334-3.75C8.667 10.321 10.159 12 12 12s3.333-1.679 3.333-3.75c0 2.071 1.493 3.75 3.334 3.75 1.525 0 2.81-1.152 3.207-2.725.167-.664.009-1.355-.22-2l-.759-2.132C20.22 3.245 18.586 2 16.77 2Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9 17c2.356 1.34 3.648 1.326 6 0"
    />
  </svg>
);
export default SvgStore;
