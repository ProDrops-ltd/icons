import * as React from "react";
import type { SVGProps } from "react";
const SvgProfile = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#000"
      d="M12 2a10 10 0 0 0-7.35 16.76 10 10 0 0 0 14.7 0A9.999 9.999 0 0 0 12 2m0 18a8 8 0 0 1-5.55-2.25 6 6 0 0 1 11.1 0A8 8 0 0 1 12 20m-2-10a2 2 0 1 1 4 0 2 2 0 0 1-4 0m8.91 6A8 8 0 0 0 15 12.62a4 4 0 1 0-6 0A8 8 0 0 0 5.09 16 7.9 7.9 0 0 1 4 12a8 8 0 1 1 16 0 7.9 7.9 0 0 1-1.09 4"
    />
  </svg>
);
export default SvgProfile;
