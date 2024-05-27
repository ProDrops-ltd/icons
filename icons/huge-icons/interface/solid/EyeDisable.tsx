import * as React from "react";
import type { SVGProps } from "react";
const SvgEyeDisable = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.47 4.53a.75.75 0 0 1 1.06-1.06l16 16a.75.75 0 1 1-1.06 1.06l-2.827-2.826C15.233 18.47 13.66 19 12 19c-3.816 0-7.175-2.795-9.13-4.853a3.085 3.085 0 0 1 0-4.294c.83-.873 1.912-1.879 3.175-2.748zm5.945 5.946a3 3 0 0 0 4.109 4.109zM12 5c3.816 0 7.174 2.795 9.13 4.853a3.085 3.085 0 0 1 0 4.294c-.44.463-.95.963-1.522 1.46L9.413 5.414A8.6 8.6 0 0 1 12 5"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgEyeDisable;
