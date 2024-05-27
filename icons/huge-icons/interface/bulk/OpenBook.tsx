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
      d="M11.317 5.424C9.193 3.936 6.213 3.262 3.994 3.011 2.896 2.887 2 3.804 2 4.935V16.2c0 1.131.896 2.048 1.994 2.172 2.219.251 5.2.925 7.323 2.413.204.143.444.215.683.215V5.639c-.24 0-.48-.072-.683-.215"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4.259 8.14a.75.75 0 0 1 .856-.627c1.303.202 2.77.54 4.156 1.075a.75.75 0 1 1-.541 1.4C7.47 9.5 6.114 9.185 4.885 8.995a.75.75 0 0 1-.626-.856M4.259 12.14a.75.75 0 0 1 .856-.627c.66.103 1.36.24 2.069.418a.75.75 0 0 1-.367 1.454 21 21 0 0 0-1.932-.39.75.75 0 0 1-.626-.855"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M12.683 5.424c2.124-1.488 5.104-2.162 7.323-2.413C21.104 2.887 22 3.804 22 4.935V16.2c0 1.131-.896 2.048-1.994 2.172-2.219.251-5.2.925-7.323 2.413A1.2 1.2 0 0 1 12 21V5.639c.24 0 .48-.072.683-.215"
    />
  </svg>
);
export default SvgOpenBook;
