import * as React from "react";
import type { SVGProps } from "react";
const SvgClockCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 12h-.75c0 .323.207.61.513.711zm.75-5a.75.75 0 0 0-1.5 0zm2.013 6.711a.75.75 0 0 0 .474-1.422zM12.75 12V7h-1.5v5zm-.987.711 3 1 .474-1.422-3-1zM21.25 12A9.25 9.25 0 0 1 12 21.25v1.5c5.937 0 10.75-4.813 10.75-10.75zM12 21.25A9.25 9.25 0 0 1 2.75 12h-1.5c0 5.937 4.813 10.75 10.75 10.75zM2.75 12A9.25 9.25 0 0 1 12 2.75v-1.5C6.063 1.25 1.25 6.063 1.25 12zM12 2.75A9.25 9.25 0 0 1 21.25 12h1.5c0-5.937-4.813-10.75-10.75-10.75z"
    />
  </svg>
);
export default SvgClockCircle;
