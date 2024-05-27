import * as React from "react";
import type { SVGProps } from "react";
const SvgTrophy = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17.955 4.199A2 2 0 0 0 16 2.625H8a2 2 0 0 0-1.954 1.574A2.75 2.75 0 0 0 2 6.625a4.75 4.75 0 0 0 4.04 4.697 6 6 0 0 0 5.211 5.257l-.001.046v3.25H9a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-2.25v-3.25l-.001-.046a6 6 0 0 0 5.21-5.257A4.75 4.75 0 0 0 22 6.625a2.75 2.75 0 0 0-4.046-2.426M18 6.625v3.163a3.25 3.25 0 0 0 2.5-3.163 1.25 1.25 0 1 0-2.5 0M4.75 5.375c.69 0 1.25.56 1.25 1.25v3.163a3.25 3.25 0 0 1-2.5-3.163c0-.69.56-1.25 1.25-1.25"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTrophy;
