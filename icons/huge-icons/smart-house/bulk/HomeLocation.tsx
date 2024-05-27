import * as React from "react";
import type { SVGProps } from "react";
const SvgHomeLocation = (props: SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      d="M12 18s3.5-2.915 3.5-5.4S13.657 9 12 9s-3.5 1.115-3.5 3.6S12 18 12 18m0-4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgHomeLocation;
