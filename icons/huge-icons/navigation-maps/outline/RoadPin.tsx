import * as React from "react";
import type { SVGProps } from "react";
const SvgRoadPin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={17} cy={5} r={3} stroke="currentColor" strokeWidth={1.5} />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M17 12V8M12 16v1M12 11.5v1M12 7v1"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.083 4H8.386a2 2 0 0 0-1.873 1.298l-4.5 12A2 2 0 0 0 3.886 20h16.228a2 2 0 0 0 1.873-2.702l-2.554-6.811"
    />
  </svg>
);
export default SvgRoadPin;
