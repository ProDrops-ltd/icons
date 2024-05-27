import * as React from "react";
import type { SVGProps } from "react";
const SvgTwitter = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.286 4c-2.104 0-3.81 1.79-3.81 4q.002.502.113.968c-2.023 0-5.07-.409-7.615-2.958-.338-.34-.962-.113-.938.366.377 7.687 3.669 9.929 5.364 10.068-1.095 1.082-2.685 1.935-4.285 2.318-.422.101-.527.564-.114.698 1.145.372 2.784.516 3.666.54 6.241 0 11.314-5.253 11.427-11.778.819-.533 1.344-1.69 1.639-2.51.071-.199-.256-.431-.451-.35-.613.255-1.39.315-2.052.1C17.532 4.569 16.472 4 15.286 4"
      opacity={0.4}
    />
  </svg>
);
export default SvgTwitter;