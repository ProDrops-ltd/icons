import * as React from "react";
import type { SVGProps } from "react";
const SvgIdea = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 25"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M16 18.459v.291c0 2.301-1.79 4.167-4 4.167S8 21.05 8 18.75v-.291h3.79a.72.72 0 0 0 .42 0zm0-1.5v-.512c0-.681.333-1.305.808-1.773A7.42 7.42 0 0 0 19 9.375c0-4.027-3.134-7.291-7-7.291S5 5.348 5 9.375c0 2.088.842 3.97 2.192 5.3.475.467.808 1.09.808 1.772v.512h3.25v-5.177L9.47 9.928a.804.804 0 0 1 0-1.105.73.73 0 0 1 1.06 0l1.47 1.53 1.47-1.53a.73.73 0 0 1 1.06 0c.293.305.293.8 0 1.105l-1.78 1.854v5.177z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIdea;
