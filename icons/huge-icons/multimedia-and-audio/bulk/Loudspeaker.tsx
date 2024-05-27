import * as React from "react";
import type { SVGProps } from "react";
const SvgLoudspeaker = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 6a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 19a4 4 0 1 0 0-8 4 4 0 0 0 0 8m0-5.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M13.5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
    />
  </svg>
);
export default SvgLoudspeaker;
