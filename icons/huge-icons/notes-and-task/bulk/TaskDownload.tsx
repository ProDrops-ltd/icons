import * as React from "react";
import type { SVGProps } from "react";
const SvgTaskDownload = (props: SVGProps<SVGSVGElement>) => (
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
      d="m12.75 15.19.72-.72a.75.75 0 1 1 1.06 1.06l-1.293 1.293a1.75 1.75 0 0 1-2.474 0L9.47 15.53a.75.75 0 0 1 1.06-1.06l.72.72V11a.75.75 0 1 1 1.5 0z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTaskDownload;
