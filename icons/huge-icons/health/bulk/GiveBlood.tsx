import * as React from "react";
import type { SVGProps } from "react";
const SvgGiveBlood = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14 8.056c0-1.984 1.685-3.943 2.868-5.075a1.62 1.62 0 0 1 2.264 0C20.315 4.113 22 6.072 22 8.056 22 10 20.485 12 18 12s-4-2-4-3.944"
    />
    <path
      fill="currentColor"
      d="M4 10H2v9l4.31 2.155A8 8 0 0 0 9.89 22H18a2 2 0 1 0 0-4h-1.584c-.931 0-1.85-.217-2.683-.633l-2.714-1.721q.139-.183.234-.403a1.91 1.91 0 0 0-.99-2.503z"
      opacity={0.4}
    />
  </svg>
);
export default SvgGiveBlood;
