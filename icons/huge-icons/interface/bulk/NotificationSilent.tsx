import * as React from "react";
import type { SVGProps } from "react";
const SvgNotificationSilent = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 19c1.385 0 2.563-.835 3-2v-1H9v1c.437 1.165 1.615 2 3 2"
    />
    <path
      fill="currentColor"
      d="M5.68 8.794C6.054 5.491 8.77 3 12 3s5.946 2.49 6.32 5.794l.345 3.044c.086.757.393 1.469.88 2.042 1.033 1.216.194 3.12-1.375 3.12H5.83c-1.57 0-2.408-1.904-1.375-3.12a3.8 3.8 0 0 0 .88-2.042z"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="m5.68 8.794-.345 3.044a3.8 3.8 0 0 1-.88 2.042C3.422 15.096 4.261 17 5.83 17h10.11l4.53 4.53a.75.75 0 1 0 1.06-1.06l-18-18a.75.75 0 0 0-1.06 1.06l3.612 3.613c-.2.52-.337 1.073-.402 1.651"
    />
  </svg>
);
export default SvgNotificationSilent;
