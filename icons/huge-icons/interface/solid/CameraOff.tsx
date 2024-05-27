import * as React from "react";
import type { SVGProps } from "react";
const SvgCameraOff = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.47 2.53a.75.75 0 0 1 1.06-1.06l20 20a.75.75 0 1 1-1.06 1.06l-1.865-1.865A4 4 0 0 1 18 21H6a4 4 0 0 1-4-4v-7c0-1.883 1.3-3.461 3.052-3.887zm8.64 8.64a3 3 0 1 0 4.22 4.22zM10.07 3h3.86a2 2 0 0 1 1.664.89L17 6h1a4 4 0 0 1 4 4v7q-.001.465-.101.899L8.2 4.2l.206-.31A2 2 0 0 1 10.07 3M12 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCameraOff;
