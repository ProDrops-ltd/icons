import * as React from "react";
import type { SVGProps } from "react";
const SvgFlag = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15 16h1.127a4 4 0 0 1 3.072 1.44l1.067 1.28c1.086 1.302.16 3.28-1.536 3.28H5.27c-1.696 0-2.622-1.978-1.536-3.28L4.8 17.44A4 4 0 0 1 7.873 16H9"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12 19v-9m0 0V4a2 2 0 0 1 2-2h5.382a1 1 0 0 1 .894 1.447l-1.052 2.106a1 1 0 0 0 0 .894l1.052 2.106A1 1 0 0 1 19.382 10z"
    />
  </svg>
);
export default SvgFlag;
