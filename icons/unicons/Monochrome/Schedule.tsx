import * as React from "react";
import type { SVGProps } from "react";
const SvgSchedule = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 6a1 1 0 0 1-1-.999V3a1 1 0 0 1 2 0v2a1 1 0 0 1-.999 1zm10 0a1 1 0 0 1-1-.999V3a1 1 0 1 1 2 0v2a1 1 0 0 1-.999 1z"
    />
    <path
      fill="#6563FF"
      d="M19 4h-1v1a1 1 0 1 1-2 0V4H8v1a1 1 0 0 1-2 0V4H5a3 3 0 0 0-3 3v2h20V7a3 3 0 0 0-3-3M7 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2M7 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2M12 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2M12 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2M17 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2M17 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
    />
    <path
      fill="#A2A1FF"
      d="M2 9v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V9zm5 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2m0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2m5 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2m0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2m5 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2m0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2"
    />
  </svg>
);
export default SvgSchedule;
