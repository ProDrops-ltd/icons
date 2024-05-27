import * as React from "react";
import type { SVGProps } from "react";
const SvgUserPolygon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m18.301 18.928.62-.367C20.209 17.799 21 16.39 21 14.868V9.132c0-1.523-.792-2.931-2.078-3.693l-4.844-2.868a4.07 4.07 0 0 0-4.156 0L5.078 5.44C3.792 6.201 3 7.61 3 9.132v5.736c0 1.523.792 2.931 2.078 3.693l.621.367m12.602 0-4.222 2.5a4.07 4.07 0 0 1-4.157 0l-4.223-2.5m12.602 0c-1.258-2.23-3.609-3.73-6.301-3.73s-5.043 1.5-6.301 3.73"
    />
    <circle
      cx={3}
      cy={3}
      r={3}
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
      transform="matrix(1 0 0 -1 9 12)"
    />
  </svg>
);
export default SvgUserPolygon;
