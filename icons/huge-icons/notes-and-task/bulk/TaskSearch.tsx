import * as React from "react";
import type { SVGProps } from "react";
const SvgTaskSearch = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21 18V8a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4"
      opacity={0.4}
    />
    <rect width={8} height={4} x={8} y={2} fill="currentColor" rx={2} />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 10.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M8.25 13a3.75 3.75 0 1 1 6.879 2.068l.901.902a.75.75 0 1 1-1.06 1.06l-.902-.901A3.75 3.75 0 0 1 8.25 13"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTaskSearch;
