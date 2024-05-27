import * as React from "react";
import type { SVGProps } from "react";
const SvgTextSpacing = (props: SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      d="M6.25 5A.75.75 0 0 1 7 4.25h10a.75.75 0 0 1 0 1.5h-4.25V13a.75.75 0 0 1-1.5 0V5.75H7A.75.75 0 0 1 6.25 5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4.25 17c0 .199.079.39.22.53l2 2a.75.75 0 0 0 1.06-1.06l-.72-.72h10.38l-.72.72a.75.75 0 1 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06l-2-2a.75.75 0 1 0-1.06 1.06l.72.72H6.81l.72-.72a.75.75 0 1 0-1.06-1.06l-2 2a.75.75 0 0 0-.22.53"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTextSpacing;
