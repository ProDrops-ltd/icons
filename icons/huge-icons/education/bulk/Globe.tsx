import * as React from "react";
import type { SVGProps } from "react";
const SvgGlobe = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={12} cy={9} r={7} fill="currentColor" opacity={0.4} />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5.459 1.398a.75.75 0 0 1 0 1.061 9.25 9.25 0 0 0 13.082 13.082.75.75 0 0 1 1.06 1.06 10.75 10.75 0 0 1-6.851 3.123v1.526H15a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5h2.25v-1.526A10.75 10.75 0 0 1 1.25 9a10.75 10.75 0 0 1 3.148-7.602.75.75 0 0 1 1.061 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgGlobe;
