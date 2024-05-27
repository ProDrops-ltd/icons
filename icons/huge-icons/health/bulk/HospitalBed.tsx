import * as React from "react";
import type { SVGProps } from "react";
const SvgHospitalBed = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20.75 14H2v4h20.75v-2a2 2 0 0 0-2-2M22 6.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M16 3.75a.75.75 0 0 1 .75.75v1.25h1.5V4.5a.75.75 0 0 1 1.5 0v4a.75.75 0 0 1-1.5 0V7.25h-1.5V8.5a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75M2 8.25a.75.75 0 0 1 .75.75v8.25H22a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-3.25H2.75V22a.75.75 0 0 1-1.5 0V9A.75.75 0 0 1 2 8.25"
      clipRule="evenodd"
    />
    <path fill="currentColor" d="M5 12v2h5v-2a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1" />
  </svg>
);
export default SvgHospitalBed;
