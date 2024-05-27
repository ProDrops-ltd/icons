import * as React from "react";
import type { SVGProps } from "react";
const SvgUserRectangle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12q.519-.002.999-.126A4 4 0 0 0 22 18V6a4 4 0 0 0-4-4m-3 7a3 3 0 1 0-6 0 3 3 0 0 0 6 0m-7.847 8.015C7.7 15.282 9.663 14 12 14s4.3 1.282 4.847 3.015c.167.527-.295.985-.847.985H8c-.552 0-1.014-.458-.847-.985"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgUserRectangle;
