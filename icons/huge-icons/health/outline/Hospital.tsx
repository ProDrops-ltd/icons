import * as React from "react";
import type { SVGProps } from "react";
const SvgHospital = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 22V6a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v16M9 22v-5a3 3 0 1 1 6 0v5M12 5v6M15 8H9M2 22h20"
    />
  </svg>
);
export default SvgHospital;
