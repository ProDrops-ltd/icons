import * as React from "react";
import type { SVGProps } from "react";
const SvgCardiogram = (props: SVGProps<SVGSVGElement>) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 12h5l2-3 4 6 2-3h5m-9-6.476.765-.822c2.113-2.27 5.538-2.27 7.65 0s2.113 5.95 0 8.22l-6.885 7.397a2.06 2.06 0 0 1-3.06 0l-6.886-7.397c-2.112-2.27-2.112-5.95 0-8.22s5.538-2.27 7.651 0z"
    />
  </svg>
);
export default SvgCardiogram;
