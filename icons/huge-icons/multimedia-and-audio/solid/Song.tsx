import * as React from "react";
import type { SVGProps } from "react";
const SvgSong = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 3.25a.75.75 0 0 0 0 1.5h11a.75.75 0 0 0 0-1.5zm0 4a.75.75 0 0 0 0 1.5h11a.75.75 0 0 0 0-1.5zm15-4a.75.75 0 0 0-.75.75v8.536A4.75 4.75 0 1 0 17.75 16V4.816a4.25 4.25 0 0 1 2.65 6.734.75.75 0 1 0 1.2.9 5.75 5.75 0 0 0-4.6-9.2m-15 8a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSong;
