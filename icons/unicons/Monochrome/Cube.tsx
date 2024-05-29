import * as React from "react";
import type { SVGProps } from "react";
const SvgCube = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="#6563FF" d="M12 12.3 3.5 7.05 12 1.8l8.5 5.25z" />
    <path fill="#C1C0FF" d="M12 22.2v-9.9l8.5-5.25v9.9z" />
    <path fill="#A2A1FF" d="m12 22.2-8.5-5.25v-9.9L12 12.3z" />
  </svg>
);
export default SvgCube;
