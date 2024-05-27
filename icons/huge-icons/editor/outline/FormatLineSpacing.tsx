import * as React from "react";
import type { SVGProps } from "react";
const SvgFormatLineSpacing = (props: SVGProps<SVGSVGElement>) => (
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
      d="m4 16 2 2m0 0 2-2m-2 2V6m0 0L4 8m2-2 2 2"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12 7h8M12 12h8M12 17h8"
    />
  </svg>
);
export default SvgFormatLineSpacing;
