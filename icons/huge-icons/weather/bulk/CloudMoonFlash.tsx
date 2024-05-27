import * as React from "react";
import type { SVGProps } from "react";
const SvgCloudMoonFlash = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21 10a5 5 0 1 0-8.544-5.089A7.03 7.03 0 0 1 15.44 8.25 5 5 0 0 1 17 8c1.636 0 3.088.786 4 2"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M2 11a7 7 0 0 0 7 7h8a5 5 0 1 0-1.561-9.751 7.03 7.03 0 0 0-2.983-3.338A7 7 0 0 0 2 11"
      opacity={0.4}
    />
    <path fill="currentColor" d="m8 18 5-6v4h3l-5 6v-4z" />
  </svg>
);
export default SvgCloudMoonFlash;
