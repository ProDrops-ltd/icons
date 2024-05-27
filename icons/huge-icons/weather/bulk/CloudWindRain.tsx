import * as React from "react";
import type { SVGProps } from "react";
const SvgCloudWindRain = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 10a7 7 0 0 0 7 7h8a5 5 0 1 0-1.561-9.751A7.002 7.002 0 0 0 2 10"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12.279 15.304a.75.75 0 0 1 .418.975l-2 5a.75.75 0 1 1-1.393-.557l2-5a.75.75 0 0 1 .975-.418m-3.943.025a.75.75 0 0 1 .335 1.007l-1 2a.75.75 0 1 1-1.342-.671l1-2a.75.75 0 0 1 1.007-.336m8 0a.75.75 0 0 1 .335 1.007l-1 2a.75.75 0 1 1-1.342-.671l1-2a.75.75 0 0 1 1.007-.336"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCloudWindRain;
