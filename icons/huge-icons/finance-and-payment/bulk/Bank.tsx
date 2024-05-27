import * as React from "react";
import type { SVGProps } from "react";
const SvgBank = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.033 10h17.934c1.02 0 1.42-1.351.572-1.93l-8.395-5.716a2.03 2.03 0 0 0-2.288 0L2.461 8.07C1.612 8.649 2.013 10 3.033 10"
      opacity={0.4}
    />
    <path fill="currentColor" d="M6 10h4v8H6zM14 10h4v8h-4z" />
    <path
      fill="currentColor"
      d="M19.382 18a1 1 0 0 1 .894.553l1 2A1 1 0 0 1 20.382 22H3.618a1 1 0 0 1-.894-1.447l1-2A1 1 0 0 1 4.618 18z"
      opacity={0.4}
    />
  </svg>
);
export default SvgBank;
