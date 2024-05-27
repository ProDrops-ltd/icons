import * as React from "react";
import type { SVGProps } from "react";
const SvgBookInfo = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.317 5.424C9.193 3.936 6.213 3.262 3.994 3.011 2.896 2.887 2 3.804 2 4.935V16.2c0 1.131.896 2.048 1.994 2.172 2.219.251 5.2.925 7.323 2.413.204.143.444.215.683.215V5.639c-.24 0-.48-.072-.683-.215M4.259 8.14a.75.75 0 0 1 .856-.626c1.303.201 2.77.539 4.156 1.074a.75.75 0 0 1-.541 1.4C7.47 9.5 6.114 9.186 4.885 8.996a.75.75 0 0 1-.626-.856m.856 3.374a.75.75 0 1 0-.23 1.482c.62.096 1.273.224 1.932.39a.75.75 0 0 0 .367-1.455 23 23 0 0 0-2.07-.417"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M12.683 5.424c2.124-1.488 5.104-2.162 7.323-2.413C21.104 2.887 22 3.804 22 4.935V16.2c0 1.131-.896 2.048-1.994 2.172-2.219.251-5.2.925-7.323 2.413A1.2 1.2 0 0 1 12 21V5.639c.24 0 .48-.072.683-.215"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M18 16.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <path fill="currentColor" d="M19 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
  </svg>
);
export default SvgBookInfo;
