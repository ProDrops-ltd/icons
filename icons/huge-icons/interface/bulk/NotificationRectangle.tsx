import * as React from "react";
import type { SVGProps } from "react";
const SvgNotificationRectangle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="currentColor" d="M22 7a5 5 0 0 1-5 5 5 5 0 1 1 5-5" />
    <path
      fill="currentColor"
      d="M12 7a5 5 0 0 0 6 4.9V18a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-8a4 4 0 0 1 4-4h6.1q-.1.486-.1 1"
      opacity={0.4}
    />
  </svg>
);
export default SvgNotificationRectangle;
