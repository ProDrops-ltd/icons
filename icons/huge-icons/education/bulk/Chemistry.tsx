import * as React from "react";
import type { SVGProps } from "react";
const SvgChemistry = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="currentColor" d="M12 2h6v13a3 3 0 1 1-6 0z" opacity={0.4} />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11 2a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 11 2M6 1.25a.75.75 0 0 1 .75.75v20a.75.75 0 0 1-1.5 0V2A.75.75 0 0 1 6 1.25"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3.25 8A.75.75 0 0 1 4 7.25h16a.75.75 0 0 1 0 1.5H4A.75.75 0 0 1 3.25 8M3.25 22a.75.75 0 0 1 .75-.75h16a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgChemistry;
