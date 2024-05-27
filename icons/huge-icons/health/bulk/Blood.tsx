import * as React from "react";
import type { SVGProps } from "react";
const SvgBlood = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 14.111c0-4.649 4.63-9.233 6.845-11.16a1.743 1.743 0 0 1 2.31 0C15.371 4.877 20 9.461 20 14.11 20 18 16.97 22 12 22s-8-4-8-7.889"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12.264 19.049a.75.75 0 0 1 .593-.88c1.747-.34 2.934-1.735 3.287-3.33a.75.75 0 0 1 1.464.323c-.46 2.081-2.038 4.007-4.464 4.48a.75.75 0 0 1-.88-.593"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBlood;
