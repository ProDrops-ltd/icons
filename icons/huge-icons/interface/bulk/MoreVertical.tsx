import * as React from "react";
import type { SVGProps } from "react";
const SvgMoreVertical = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.5 11.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0"
    />
    <path
      fill="currentColor"
      d="M12.5 6.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M12.5 16.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0"
      opacity={0.4}
    />
  </svg>
);
export default SvgMoreVertical;
