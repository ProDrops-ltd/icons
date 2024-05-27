import * as React from "react";
import type { SVGProps } from "react";
const SvgThermometer = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.006 3.857 9.69 10.174a1.95 1.95 0 0 0-.551 1.103l-.161 1.126a1.95 1.95 0 0 1-.552 1.103l-1.93 1.93.035.034 2 2 .033.035 1.93-1.93a1.95 1.95 0 0 1 1.104-.552l1.126-.16a1.95 1.95 0 0 0 1.103-.553l6.317-6.316a2.925 2.925 0 1 0-4.137-4.137M7.505 18.564l-.035-.034-2-2-.033-.035-2.009 2.008a1.463 1.463 0 1 0 2.069 2.069z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgThermometer;
