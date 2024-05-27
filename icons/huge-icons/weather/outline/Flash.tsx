import * as React from "react";
import type { SVGProps } from "react";
const SvgFlash = (props: SVGProps<SVGSVGElement>) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m5.252 11.856 6.998-9.38c.69-.924 2.103-.413 2.103.76v5.678c0 .682.527 1.235 1.177 1.235h2.291c.981 0 1.531 1.184.927 1.995l-6.998 9.38c-.69.924-2.103.413-2.103-.76v-5.678c0-.682-.527-1.235-1.177-1.235H6.18c-.981 0-1.531-1.184-.927-1.995Z"
    />
  </svg>
);
export default SvgFlash;
