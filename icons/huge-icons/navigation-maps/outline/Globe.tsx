import * as React from "react";
import type { SVGProps } from "react";
const SvgGlobe = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <ellipse
      cx={12}
      cy={12}
      stroke="currentColor"
      strokeWidth={1.5}
      rx={4}
      ry={10}
    />
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M21.996 11.72c-1.802 1.482-5.601 2.502-9.996 2.502s-8.194-1.02-9.996-2.501m19.992 0C21.848 6.326 17.43 2 12 2s-9.848 4.327-9.996 9.72m19.992 0q.004.14.004.28c0 5.523-4.477 10-10 10S2 17.523 2 12q0-.14.004-.28"
    />
  </svg>
);
export default SvgGlobe;
