import * as React from "react";
import type { SVGProps } from "react";
const SvgNotification = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 20c1.385 0 2.563-.835 3-2H9c.437 1.165 1.615 2 3 2"
    />
    <path
      fill="currentColor"
      d="M5.68 9.794C6.054 6.491 8.77 4 12 4s5.946 2.49 6.32 5.794l.345 3.044c.086.757.393 1.469.88 2.042 1.033 1.216.194 3.12-1.375 3.12H5.83c-1.57 0-2.408-1.904-1.375-3.12a3.8 3.8 0 0 0 .88-2.042z"
      opacity={0.4}
    />
  </svg>
);
export default SvgNotification;
