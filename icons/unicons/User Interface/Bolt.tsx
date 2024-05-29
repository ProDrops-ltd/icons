import * as React from "react";
import type { SVGProps } from "react";
const SvgBolt = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#000"
      d="M19.89 9.55A1 1 0 0 0 19 9h-5V3a1 1 0 0 0-1.308-1.002 1 1 0 0 0-.502.362l-8 11a1 1 0 0 0-.08 1A1 1 0 0 0 5 15h5v6a1 1 0 0 0 1.81.59l8-11a1 1 0 0 0 .08-1.04M12 17.92V14a1 1 0 0 0-1-1H7l5-6.92V10a1 1 0 0 0 1 1h4z"
    />
  </svg>
);
export default SvgBolt;
