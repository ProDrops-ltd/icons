import * as React from "react";
import type { SVGProps } from "react";
const SvgEdit = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 21h18M13.784 5.312s0 1.634 1.635 3.269 3.27 1.635 3.27 1.635m-11.37 7.772 3.433-.49c.495-.071.954-.3 1.308-.654l8.263-8.263a2.31 2.31 0 0 0 0-3.27l-1.635-1.634a2.31 2.31 0 0 0-3.269 0L7.156 11.94a2.3 2.3 0 0 0-.654 1.308l-.49 3.432a1.156 1.156 0 0 0 1.308 1.308Z"
    />
  </svg>
);
export default SvgEdit;
