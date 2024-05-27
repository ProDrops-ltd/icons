import * as React from "react";
import type { SVGProps } from "react";
const SvgGpsOff = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 1.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75M12 19.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75M22.75 12a.75.75 0 0 1-.75.75h-2a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 .75.75M4.75 12a.75.75 0 0 1-.75.75H2a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 .75.75"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 20A8 8 0 0 1 6.898 5.837l11.264 11.265A7.98 7.98 0 0 1 12 20m0-5a3 3 0 0 1-1.524-5.584l4.109 4.108A3 3 0 0 1 12 15"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2.47 2.47a.75.75 0 0 1 1.06 0l18 18a.75.75 0 1 1-1.06 1.06l-18-18a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M15 12a3 3 0 0 0-4.524-2.585l4.109 4.109c.264-.447.415-.968.415-1.524"
    />
  </svg>
);
export default SvgGpsOff;
