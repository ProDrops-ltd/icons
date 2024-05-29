import * as React from "react";
import type { SVGProps } from "react";
const SvgStethoscope = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#A2A1FF"
      d="M19 14a3 3 0 1 1 0-5.999A3 3 0 0 1 19 14M8 15a6.006 6.006 0 0 1-6-6V3a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2H4v5a4 4 0 1 0 8 0V4h-1a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1v6a6.006 6.006 0 0 1-6 6"
    />
    <path
      fill="#6563FF"
      d="M19 14a3 3 0 0 1-1-.185V15.5a4.5 4.5 0 0 1-9 0v-.59c-.661.12-1.339.12-2 0v.59a6.5 6.5 0 0 0 13 0v-1.684c-.32.118-.659.18-1 .184"
    />
  </svg>
);
export default SvgStethoscope;
