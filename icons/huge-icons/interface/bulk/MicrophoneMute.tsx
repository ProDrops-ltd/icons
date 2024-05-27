import * as React from "react";
import type { SVGProps } from "react";
const SvgMicrophoneMute = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 6a4 4 0 1 1 8 0v6a4 4 0 0 1-8 0z"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M8 12a4 4 0 0 0 6.394 3.205l1.602 1.601A6.25 6.25 0 0 1 5.75 12v-1a.75.75 0 0 0-1.5 0v1a7.75 7.75 0 0 0 7 7.714v1.536H9a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-2.25v-1.536a7.7 7.7 0 0 0 4.31-1.843l3.41 3.41a.75.75 0 1 0 1.06-1.061l-18-18a.75.75 0 0 0-1.06 1.06L8 8.81z"
    />
    <path
      fill="currentColor"
      d="M19.75 12v-1a.75.75 0 1 0-1.5 0v1a6.22 6.22 0 0 1-1.224 3.716l1.07 1.07A7.7 7.7 0 0 0 19.75 12"
      opacity={0.4}
    />
  </svg>
);
export default SvgMicrophoneMute;
