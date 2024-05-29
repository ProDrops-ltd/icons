import * as React from "react";
import type { SVGProps } from "react";
const SvgAirplay = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19 3H5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3"
    />
    <path
      fill="#6563FF"
      d="M16 21H8a1 1 0 0 1-.832-1.555l4-6a1.037 1.037 0 0 1 1.664 0l4 6A1 1 0 0 1 16 21"
    />
  </svg>
);
export default SvgAirplay;
