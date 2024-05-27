import * as React from "react";
import type { SVGProps } from "react";
const SvgFlashLight = (props: SVGProps<SVGSVGElement>) => (
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.143 2H6.857A.857.857 0 0 0 6 2.857a5.14 5.14 0 0 0 3 4.677V19a3 3 0 1 0 6 0V7.534c1.77-.813 3-2.601 3-4.677A.857.857 0 0 0 17.143 2M12 9v2"
    />
  </svg>
);
export default SvgFlashLight;
