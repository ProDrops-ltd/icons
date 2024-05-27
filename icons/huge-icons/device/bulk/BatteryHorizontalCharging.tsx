import * as React from "react";
import type { SVGProps } from "react";
const SvgBatteryHorizontalCharging = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18 6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="m8.11 12.129.908-.887 3.185-3.11c.318-.31.904-.024.751.367l-.878 2.25c-.095.245.118.497.419.497h1.063c.379 0 .582.381.332.625L9.797 15.87c-.318.31-.904.023-.751-.368l.878-2.25c.095-.245-.118-.497-.419-.497H8.442c-.379 0-.582-.381-.332-.625"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M22 9.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBatteryHorizontalCharging;
