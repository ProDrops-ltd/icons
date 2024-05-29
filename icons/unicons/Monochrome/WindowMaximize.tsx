import * as React from "react";
import type { SVGProps } from "react";
const SvgWindowMaximize = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="#C1C0FF" d="M22 8H2v2h20z" />
    <path fill="#6563FF" d="M3 2h18a1 1 0 0 1 1 1v5H2V3a1 1 0 0 1 1-1" />
    <path fill="#A2A1FF" d="M2 10h20v11a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
  </svg>
);
export default SvgWindowMaximize;
