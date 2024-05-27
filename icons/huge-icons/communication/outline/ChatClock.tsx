import * as React from "react";
import type { SVGProps } from "react";
const SvgChatClock = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.75 10.5a.75.75 0 0 0-1.5 0zM12 12h-.75c0 .414.336.75.75.75zm1.5.75a.75.75 0 0 0 0-1.5zm-2.5-9h2v-1.5h-2zM2.75 17v-5h-1.5v5zM13 20.25H6v1.5h7zM1.25 17A4.75 4.75 0 0 0 6 21.75v-1.5A3.25 3.25 0 0 1 2.75 17zm20-5A8.25 8.25 0 0 1 13 20.25v1.5c5.385 0 9.75-4.365 9.75-9.75zM13 3.75A8.25 8.25 0 0 1 21.25 12h1.5c0-5.385-4.365-9.75-9.75-9.75zm-2-1.5c-5.385 0-9.75 4.365-9.75 9.75h1.5A8.25 8.25 0 0 1 11 3.75zM15.25 12A3.25 3.25 0 0 1 12 15.25v1.5A4.75 4.75 0 0 0 16.75 12zM12 15.25A3.25 3.25 0 0 1 8.75 12h-1.5A4.75 4.75 0 0 0 12 16.75zM8.75 12A3.25 3.25 0 0 1 12 8.75v-1.5A4.75 4.75 0 0 0 7.25 12zM12 8.75A3.25 3.25 0 0 1 15.25 12h1.5A4.75 4.75 0 0 0 12 7.25zm-.75 1.75V12h1.5v-1.5zm.75 2.25h1.5v-1.5H12z"
    />
  </svg>
);
export default SvgChatClock;
