import * as React from "react";
import type { SVGProps } from "react";
const SvgSlack = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.338 2a2 2 0 1 0 .001 4h1.996V4a2 2 0 0 0-1.997-2m0 5.333H4.016a2 2 0 1 0 0 4h5.322a2 2 0 1 0 0-4"
    />
    <path
      fill="#C1C0FF"
      d="M21.98 9.333a1.996 1.996 0 1 0-3.993 0v2h1.997a2 2 0 0 0 1.996-2m-5.323 0V3.999a1.997 1.997 0 1 0-3.992 0v5.334a1.994 1.994 0 0 0 2.761 1.848 2 2 0 0 0 1.231-1.848"
    />
    <path
      fill="#8382FF"
      d="M14.661 22a2 2 0 0 0 0-3.999h-1.996v2a2 2 0 0 0 1.996 2m0-5.334h5.323a2 2 0 0 0 0-4h-5.322a2 2 0 1 0-.001 4"
    />
    <path
      fill="#A2A1FF"
      d="M2.02 14.666a1.996 1.996 0 1 0 3.993 0v-2H4.016a2 2 0 0 0-1.996 2m5.323 0v5.333a1.996 1.996 0 1 0 3.992 0v-5.332a1.995 1.995 0 1 0-3.992-.001"
    />
  </svg>
);
export default SvgSlack;
