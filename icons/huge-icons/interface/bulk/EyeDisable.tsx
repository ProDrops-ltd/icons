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
      d="M21.13 9.853a3.085 3.085 0 0 1 0 4.294C19.174 16.205 15.816 19 12 19s-7.175-2.795-9.13-4.853a3.085 3.085 0 0 1 0-4.294C4.825 7.795 8.184 5 12 5s7.174 2.795 9.13 4.853"
      opacity={0.4}
    />
    <path fill="currentColor" d="M14.121 14.121A3 3 0 1 0 9.88 9.88L12 12z" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 19c-3.816 0-7.175-2.795-9.13-4.853a3.085 3.085 0 0 1 0-4.294c.83-.873 1.912-1.879 3.175-2.748L3.47 4.53a.75.75 0 1 1 1.06-1.06l16 16a.75.75 0 1 1-1.06 1.06l-2.827-2.827C15.233 18.472 13.66 19 12 19m0-4a3 3 0 0 1-2.585-4.524l4.109 4.109A3 3 0 0 1 12 15"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgEyeDisable;
