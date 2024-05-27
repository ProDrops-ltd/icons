import * as React from "react";
import type { SVGProps } from "react";
const SvgNotificationOff = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.847 9.194c.391-3.454 3.232-6.058 6.607-6.058s6.217 2.604 6.608 6.058l.36 3.182c.09.791.41 1.536.92 2.135 1.08 1.272.203 3.262-1.437 3.262h-12.9c-1.642 0-2.518-1.99-1.438-3.262.51-.6.83-1.344.92-2.134z"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M11.455 21.955c1.447 0 2.68-.873 3.136-2.091a.523.523 0 0 0-.523-.523H8.841a.523.523 0 0 0-.523.522c.457 1.219 1.689 2.092 3.137 2.092M18.423 12.377l-.36-3.183c-.392-3.454-3.232-6.058-6.608-6.058-2.433 0-4.384 1.14-5.32 2.72L18.03 17.751c1.468 0 2.392-1.969 1.312-3.24a4 4 0 0 1-.92-2.134"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M1.491 2.32a.784.784 0 0 0 0 1.11l18.818 18.818a.784.784 0 0 0 1.11-1.11L2.598 2.32a.784.784 0 0 0-1.108 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgNotificationOff;
