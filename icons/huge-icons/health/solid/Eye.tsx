import * as React from "react";
import type { SVGProps } from "react";
const SvgEye = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 1.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75m7.102 8.837C17.45 8.674 14.883 7 12 7s-5.45 1.675-7.102 3.086a2.487 2.487 0 0 0 0 3.828C6.55 15.324 9.117 17 12 17s5.45-1.675 7.102-3.086a2.487 2.487 0 0 0 0-3.828M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4m.75 6a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0zM2.47 4.47a.75.75 0 0 1 1.06 0l1.5 1.5a.75.75 0 0 1-1.06 1.06l-1.5-1.5a.75.75 0 0 1 0-1.06m19.06 0a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 1 1-1.06-1.06l1.5-1.5a.75.75 0 0 1 1.06 0m-18 15.06a.75.75 0 0 1-1.06-1.06l1.5-1.5a.75.75 0 0 1 1.06 1.06zm18-1.06a.75.75 0 1 1-1.06 1.06l-1.5-1.5a.75.75 0 1 1 1.06-1.06z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgEye;
