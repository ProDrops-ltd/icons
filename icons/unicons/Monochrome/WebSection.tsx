import * as React from "react";
import type { SVGProps } from "react";
const SvgWebSection = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="#C1C0FF" d="M16 2h-2v20h2z" />
    <path fill="#A2A1FF" d="M3 2h11v20H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1" />
    <path fill="#6563FF" d="M16 2h5a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1h-5z" />
  </svg>
);
export default SvgWebSection;
