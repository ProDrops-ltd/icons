import * as React from "react";
import type { SVGProps } from "react";
const SvgBaseball = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13.922 6.44a1 1 0 0 0-1.703 1.05q.265.428.565.843a1 1 0 0 0 1.62-1.174q-.258-.353-.482-.719m-2.73 9.222a1 1 0 1 0-1.609 1.188q.254.345.476.709a1 1 0 1 0 1.705-1.047q-.267-.436-.572-.85m-3.707-3.429a1.001 1.001 0 0 0-1.331 1.44 1 1 0 0 0 .286.265q.364.223.713.479A1.001 1.001 0 1 0 8.331 12.8q-.414-.301-.846-.567m10.06-2.167q-.363-.224-.715-.48a1 1 0 0 0-1.178 1.618q.415.302.847.567a1 1 0 1 0 1.047-1.705m1.447-5.065a9.9 9.9 0 1 0 0 14.001 9.913 9.913 0 0 0 0-14.001M17.72 17.729a8.03 8.03 0 0 1-4.516 2.273.97.97 0 0 0-1.746.074 8.06 8.06 0 0 1-7.535-7.532.974.974 0 0 0 .073-1.747 8.04 8.04 0 0 1 6.784-6.792 1 1 0 0 0 1.086.472.98.98 0 0 0 .66-.546 8.055 8.055 0 0 1 7.537 7.538.972.972 0 0 0-.074 1.741 8.05 8.05 0 0 1-2.27 4.518"
    />
  </svg>
);
export default SvgBaseball;
