import * as React from "react";
import type { SVGProps } from "react";
const SvgMicrophone = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 2a4 4 0 0 0-4 4v6a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4m-6 8.25a.75.75 0 0 1 .75.75v1a5.25 5.25 0 1 0 10.5 0v-1a.75.75 0 0 1 1.5 0v1a6.75 6.75 0 0 1-6 6.709V20.5H15a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5h2.25v-1.791a6.75 6.75 0 0 1-6-6.709v-1a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMicrophone;
