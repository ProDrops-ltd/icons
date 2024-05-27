import * as React from "react";
import type { SVGProps } from "react";
const SvgMask = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.25 8a1.25 1.25 0 1 0-2.5 0v4a3.25 3.25 0 0 0 2.5 3.163V8m1.5.786V8a2.75 2.75 0 0 0-5.5 0v4a4.75 4.75 0 0 0 4.278 4.727c.282.79.772 1.5 1.431 2.049l.72.6a6.75 6.75 0 0 0 8.642 0l.72-.6a4.75 4.75 0 0 0 1.431-2.05A4.75 4.75 0 0 0 22.75 12V8a2.75 2.75 0 1 0-5.5 0v.786l-3.126-1.562a4.75 4.75 0 0 0-4.248 0zM20 6.75c-.69 0-1.25.56-1.25 1.25v7.163A3.25 3.25 0 0 0 21.25 12V8c0-.69-.56-1.25-1.25-1.25"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMask;
