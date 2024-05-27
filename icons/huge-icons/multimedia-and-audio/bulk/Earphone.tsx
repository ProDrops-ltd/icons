import * as React from "react";
import type { SVGProps } from "react";
const SvgEarphone = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.508 13.988c.414 0 .742-.195.742-.195v1.978c0 .58.47 1.05 1.05 1.05h.486a2.964 2.964 0 0 1 0 5.929H3a.75.75 0 0 1 0-1.5h4.786a1.464 1.464 0 0 0 0-2.929H7.3a2.55 2.55 0 0 1-2.55-2.55v-1.978s.344.195.758.195M18.527 14c-.414 0-.777-.21-.777-.21v1.981c0 .58-.47 1.05-1.05 1.05h-.486a2.964 2.964 0 0 0 0 5.929H21a.75.75 0 0 0 0-1.5h-4.786a1.464 1.464 0 0 1 0-2.929h.486a2.55 2.55 0 0 0 2.55-2.55V13.79s-.308.211-.723.211"
      clipRule="evenodd"
    />
    <g fill="currentColor" opacity={0.4}>
      <path d="M4 6a4 4 0 0 1 4-4 2 2 0 0 1 2 2v4a2 2 0 0 1-2 2q-.519-.002-1-.126V12.5a1.5 1.5 0 0 1-3 0zM20 6a4 4 0 0 0-4-4 2 2 0 0 0-2 2v4a2 2 0 0 0 2 2q.519-.002 1-.126V12.5a1.5 1.5 0 0 0 3 0z" />
    </g>
  </svg>
);
export default SvgEarphone;
