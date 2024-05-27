import * as React from "react";
import type { SVGProps } from "react";
const SvgTableLamp = (props: SVGProps<SVGSVGElement>) => (
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
      d="m17.482 10.336 1.414 1.414m-3.536.707v1.414m4.243-5.657h1.414M8 6l-4.795 5.594a2 2 0 0 0 .104 2.716L11 22m0 0h4m-4 0H7M8.152 5.233 9.8 9.24a2 2 0 0 0 3.263.653l2.828-2.829a2 2 0 0 0-.652-3.263l-4.007-1.65a2 2 0 0 0-2.176.435l-.471.471a2 2 0 0 0-.435 2.176"
    />
  </svg>
);
export default SvgTableLamp;
