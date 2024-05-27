import * as React from "react";
import type { SVGProps } from "react";
const SvgTrash1 = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="m19 9-.716 9.307A4 4 0 0 1 14.296 22H9.704a4 4 0 0 1-3.988-3.693L5 9m16-2c-2.598-1.266-5.686-2-9-2s-6.402.734-9 2m7-2V4a2 2 0 1 1 4 0v1m-4 6v6m4-6v6"
    />
  </svg>
);
export default SvgTrash1;
