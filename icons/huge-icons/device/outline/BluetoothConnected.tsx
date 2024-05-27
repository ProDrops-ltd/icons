import * as React from "react";
import type { SVGProps } from "react";
const SvgBluetoothConnected = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m6 8 10.886 7.257a1 1 0 0 1 .085 1.6l-3.33 2.776A1 1 0 0 1 12 18.865V5.135a1 1 0 0 1 1.64-.768l3.331 2.776a1 1 0 0 1-.085 1.6L6 16"
    />
    <path
      fill="currentColor"
      d="M18.414 10.586 19.828 12l-1.414 1.414L17 12zM5.586 10.586 7 12l-1.414 1.414L4.172 12z"
    />
  </svg>
);
export default SvgBluetoothConnected;
