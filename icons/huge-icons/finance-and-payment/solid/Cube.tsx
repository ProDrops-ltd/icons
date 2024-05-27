import * as React from "react";
import type { SVGProps } from "react";
const SvgCube = (props: SVGProps<SVGSVGElement>) => (
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
      d="m13.625 1.472 5 2.222c.407.181.773.425 1.09.717L12 7.926 4.286 4.41a4 4 0 0 1 1.09-.717l5-2.222a4 4 0 0 1 3.249 0M3.38 5.647A4 4 0 0 0 3 7.35v6.801a4 4 0 0 0 2.375 3.656l5 2.222q.426.189.875.274V9.232zm9.37 14.655q.45-.085.875-.274l5-2.222A4 4 0 0 0 21 14.15v-6.8c0-.601-.134-1.18-.38-1.703l-7.87 3.585z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCube;
