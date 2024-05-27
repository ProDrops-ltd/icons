import * as React from "react";
import type { SVGProps } from "react";
const SvgFacebook = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18 3h-3a5 5 0 0 0-5 5v13h4V8a1 1 0 0 1 1-1h3z"
      opacity={0.4}
    />
    <path fill="currentColor" d="M6 14h12v-4H6z" />
  </svg>
);
export default SvgFacebook;
