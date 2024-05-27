import * as React from "react";
import type { SVGProps } from "react";
const SvgDestination = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle
      cx={14.039}
      cy={5.268}
      r={1.142}
      stroke="currentColor"
      strokeWidth={1.5}
    />
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M6.616 16.886a1.317 1.317 0 1 1-2.633 0 1.317 1.317 0 0 1 2.633 0Z"
    />
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M9.25 16.886c0 2.181-2.634 5.267-3.95 5.267s-3.95-3.086-3.95-5.267a3.95 3.95 0 1 1 7.9 0ZM17.465 5.268c0 1.892-2.284 4.568-3.426 4.568s-3.425-2.676-3.425-4.568a3.426 3.426 0 0 1 6.85 0Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M13.946 12.195v2.765a2.29 2.29 0 0 0 2.292 2.292h2.257a2.327 2.327 0 0 1 0 4.654h-8.53"
    />
  </svg>
);
export default SvgDestination;
