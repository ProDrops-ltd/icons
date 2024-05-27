import * as React from "react";
import type { SVGProps } from "react";
const SvgBellSchool = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle
      cx={8.5}
      cy={8.5}
      r={8.5}
      fill="currentColor"
      opacity={0.4}
      transform="matrix(1 0 0 -1 2 19)"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M9.75 18.967V22c0 .414.336.75.75.75 6.697 0 12.139-5.374 12.248-12.045q.009-.102.009-.205a2.5 2.5 0 1 0-1.774 2.393c-1.035 4.55-4.954 8.002-9.733 8.331v-2.257a8.5 8.5 0 0 1-1.5 0"
      clipRule="evenodd"
    />
    <path fill="currentColor" d="M12.5 11a2 2 0 1 0-4 0 2 2 0 0 0 4 0" />
  </svg>
);
export default SvgBellSchool;
