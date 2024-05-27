import * as React from "react";
import type { SVGProps } from "react";
const SvgHomeShield = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21 17.967V10.15c0-1.21-.54-2.357-1.47-3.123l-5-4.118a3.975 3.975 0 0 0-5.06 0l-5 4.118A4.05 4.05 0 0 0 3 10.15v7.817C3 20.194 4.79 22 7 22h10c2.21 0 4-1.806 4-4.033"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="m11.106 9.447-2 1c-.678.339-1.115 1.034-1.078 1.79.147 3.034.902 4.412 2.859 5.95a1.8 1.8 0 0 0 2.226 0c1.962-1.547 2.69-2.942 2.851-5.94.041-.762-.396-1.463-1.079-1.804l-1.99-.996a2 2 0 0 0-1.79 0"
    />
  </svg>
);
export default SvgHomeShield;
