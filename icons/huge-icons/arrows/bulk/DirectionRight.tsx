import * as React from "react";
import type { SVGProps } from "react";
const SvgDirectionRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.532 6.414a.75.75 0 0 0-.118 1.055L10.04 12l-3.626 4.532a.75.75 0 1 0 1.172.936l4-5a.75.75 0 0 0 0-.937l-4-5a.75.75 0 0 0-1.054-.117"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12.532 6.414a.75.75 0 0 0-.118 1.055L16.04 12l-3.626 4.532a.75.75 0 1 0 1.172.936l4-5a.75.75 0 0 0 0-.937l-4-5a.75.75 0 0 0-1.055-.117"
      clipRule="evenodd"
      opacity={0.4}
    />
  </svg>
);
export default SvgDirectionRight;
