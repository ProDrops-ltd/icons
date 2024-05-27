import * as React from "react";
import type { SVGProps } from "react";
const SvgEye = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21.13 14.147a3.085 3.085 0 0 0 0-4.294C19.174 7.795 15.816 5 12 5S4.825 7.795 2.87 9.853a3.085 3.085 0 0 0 0 4.294C4.825 16.205 8.184 19 12 19s7.174-2.795 9.13-4.853M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgEye;
