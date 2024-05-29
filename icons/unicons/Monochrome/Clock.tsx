import * as React from "react";
import type { SVGProps } from "react";
const SvgClock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#6563FF"
      d="M12 6a1 1 0 0 1 1 1v4.422l2.098 1.212a1 1 0 0 1-1 1.732l-2.598-1.5A1 1 0 0 1 11 12V7a1 1 0 0 1 1-1"
    />
    <path
      fill="#A2A1FF"
      d="M2 12a10 10 0 1 0 20 0 10 10 0 0 0-20 0m9-5a1 1 0 0 1 2 0v4.422l2.098 1.212a1 1 0 0 1-1 1.732l-2.598-1.5A1 1 0 0 1 11 12z"
    />
  </svg>
);
export default SvgClock;
