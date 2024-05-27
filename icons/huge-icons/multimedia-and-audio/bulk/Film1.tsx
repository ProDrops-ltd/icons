import * as React from "react";
import type { SVGProps } from "react";
const SvgFilm1 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18 2a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4z"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12.75 7v10h-1.5V7z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M6 2a4 4 0 0 0-4 4v1h4.25V2zM7.75 2v5h3.5V2zM17.75 7h-5V2h3.5v5zM17.75 7V2H18a4 4 0 0 1 4 4v1zM18 22a4 4 0 0 0 4-4v-1h-4.25v5h-1.5v-5h-3.5v5H18M11.25 17v5h-3.5v-5zM6.25 17H2v1a4 4 0 0 0 4 4h.25z"
    />
  </svg>
);
export default SvgFilm1;
