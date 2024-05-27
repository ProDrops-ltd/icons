import * as React from "react";
import type { SVGProps } from "react";
const SvgReload = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.59 1.3a.75.75 0 0 1 .968.433l1.178 3.09a.75.75 0 0 1-1.08.915 7.25 7.25 0 0 0-9.937 9.886.75.75 0 1 1-1.298.752 8.75 8.75 0 0 1 10.27-12.703l-.535-1.406a.75.75 0 0 1 .434-.968m3.964 6.05a.75.75 0 0 1 1.025.274 8.75 8.75 0 0 1-10.27 12.703l.535 1.406a.75.75 0 0 1-1.402.534l-1.178-3.09a.75.75 0 0 1 1.08-.915 7.25 7.25 0 0 0 9.937-9.886.75.75 0 0 1 .273-1.025"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgReload;
