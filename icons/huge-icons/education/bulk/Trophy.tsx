import * as React from "react";
import type { SVGProps } from "react";
const SvgTrophy = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 16.25a.75.75 0 0 1 .75.75v3.25H15a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5h2.25V17a.75.75 0 0 1 .75-.75M4.75 4.25A2.75 2.75 0 0 1 7.5 7v4h-.75v.75A4.75 4.75 0 0 1 2 7a2.75 2.75 0 0 1 2.75-2.75M6 10.163V7a1.25 1.25 0 1 0-2.5 0A3.25 3.25 0 0 0 6 10.163M19.25 4.25A2.75 2.75 0 0 0 16.5 7v4h.75v.75A4.75 4.75 0 0 0 22 7a2.75 2.75 0 0 0-2.75-2.75M18 10.163V7a1.25 1.25 0 1 1 2.5 0 3.25 3.25 0 0 1-2.5 3.163"
      clipRule="evenodd"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M16 3a2 2 0 0 1 2 2v6a6 6 0 0 1-12 0V5a2 2 0 0 1 2-2z"
    />
  </svg>
);
export default SvgTrophy;
