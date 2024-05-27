import * as React from "react";
import type { SVGProps } from "react";
const SvgUserRectangle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M16.31 15.396C14.998 14.24 13.538 13 12 13s-2.998 1.241-4.31 2.396A2.03 2.03 0 0 0 7 16.918V17a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-.082a2.03 2.03 0 0 0-.69-1.522M15 8a3 3 0 1 0-6 0 3 3 0 0 0 6 0"
    />
  </svg>
);
export default SvgUserRectangle;
