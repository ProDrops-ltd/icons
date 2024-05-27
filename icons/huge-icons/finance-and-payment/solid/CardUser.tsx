import * as React from "react";
import type { SVGProps } from "react";
const SvgCardUser = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 25 24"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M18.375 2c1.953 0 3.579 1.4 3.93 3.25H2.445A4 4 0 0 1 6.375 2zm4 7.25v-2.5h-20v2.5zm0 1.5h-20V16a4 4 0 0 0 4 4h7a1 1 0 0 0 1-1v-1a4 4 0 0 1 4-4h3a1 1 0 0 0 1-1zm-16 6.25a1 1 0 1 0 0-2 1 1 0 0 0 0 2m15 0a2 2 0 1 0-2 2c-1.246 0-2.377.641-3.208 1.684-.451.566.024 1.316.748 1.316h4.92c.724 0 1.199-.75.748-1.316C21.753 19.641 20.62 19 19.375 19a2 2 0 0 0 2-2"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCardUser;
