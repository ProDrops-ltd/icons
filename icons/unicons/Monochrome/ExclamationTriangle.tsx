import * as React from "react";
import type { SVGProps } from "react";
const SvgExclamationTriangle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#A2A1FF"
      d="M20.057 22H3.943a3.023 3.023 0 0 1-2.618-4.534L9.382 3.511a3.023 3.023 0 0 1 5.236 0l8.057 13.955A3.023 3.023 0 0 1 20.057 22"
    />
    <path
      fill="#6563FF"
      d="M12 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2M12 14a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1"
    />
  </svg>
);
export default SvgExclamationTriangle;
