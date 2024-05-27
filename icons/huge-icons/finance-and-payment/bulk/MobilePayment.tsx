import * as React from "react";
import type { SVGProps } from "react";
const SvgMobilePayment = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 2H8a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M12 7h6a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-6zM13 19a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
    />
    <path fill="currentColor" d="M12 10.5h8V9h-8z" opacity={0.4} />
  </svg>
);
export default SvgMobilePayment;
