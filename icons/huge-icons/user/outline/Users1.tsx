import * as React from "react";
import type { SVGProps } from "react";
const SvgUsers1 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <ellipse
      cx={10}
      cy={17.5}
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
      rx={7}
      ry={3.5}
    />
    <circle
      cx={10}
      cy={7}
      r={4}
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M15.045 10.25a6 6 0 0 1-1.168 1.33 3.75 3.75 0 1 0 1.465-7.314c.266.518.46 1.081.565 1.674a2.25 2.25 0 0 1-.862 4.31M19 17.556a3.64 3.64 0 0 1-.5 1.755 9 9 0 0 0 1.031-.351c.597-.249 1.13-.564 1.524-.953.397-.39.695-.9.695-1.507s-.298-1.116-.695-1.508c-.394-.388-.927-.703-1.524-.952-1.022-.426-2.34-.7-3.781-.772 1.002.51 1.82 1.149 2.385 1.876q.447.126.82.28c.488.204.834.427 1.047.637.21.207.248.355.248.439s-.038.232-.248.439c-.206.203-.537.419-1.002.617"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgUsers1;
