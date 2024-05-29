import * as React from "react";
import type { SVGProps } from "react";
const SvgImageV = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19 2H5a3.01 3.01 0 0 0-3 3v8.86l3.88-3.88a3.075 3.075 0 0 1 4.24 0l2.871 2.887.888-.888a3.01 3.01 0 0 1 4.242 0L22 15.86V5a3.01 3.01 0 0 0-3-3"
    />
    <path
      fill="#6563FF"
      d="M10.12 9.98a3.075 3.075 0 0 0-4.24 0L2 13.86V19a3.01 3.01 0 0 0 3 3h14c.815 0 1.595-.332 2.16-.92z"
    />
    <path
      fill="#C1C0FF"
      d="M22 15.858 18.12 11.98a3.01 3.01 0 0 0-4.242 0l-.888.888 8.165 8.209c.542-.555.845-1.3.844-2.076z"
    />
  </svg>
);
export default SvgImageV;
