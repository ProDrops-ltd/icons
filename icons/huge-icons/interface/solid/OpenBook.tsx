import * as React from "react";
import type { SVGProps } from "react";
const SvgOpenBook = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.25 4.378C9.131 2.922 6.19 2.26 3.994 2.011 2.896 1.887 2 2.804 2 3.935V15.2c0 1.131.896 2.048 1.994 2.172 2.196.248 5.137.911 7.256 2.367zm1.5 15.361c2.119-1.456 5.06-2.119 7.256-2.367C21.104 17.248 22 16.332 22 15.2V3.935c0-1.131-.896-2.048-1.994-1.924-2.195.248-5.137.911-7.256 2.367zM4.259 7.14a.75.75 0 0 1 .856-.626c1.303.201 2.77.539 4.155 1.074a.75.75 0 0 1-.54 1.4c-1.26-.487-2.616-.802-3.845-.992a.75.75 0 0 1-.626-.856m.856 3.374a.75.75 0 1 0-.23 1.482c.62.096 1.273.224 1.932.39a.75.75 0 0 0 .366-1.455 23 23 0 0 0-2.068-.417"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgOpenBook;