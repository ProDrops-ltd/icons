import * as React from "react";
import type { SVGProps } from "react";
const SvgHorizontalAlignLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="#A2A1FF" d="M16 10H4V6h11a1 1 0 0 1 1 1z" />
    <path fill="#6563FF" d="M21 18H4v-8h17a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1" />
    <path
      fill="#C1C0FF"
      d="M3 22a1 1 0 0 1-1-.999V3a1 1 0 0 1 2 0v18a1 1 0 0 1-.999 1z"
    />
  </svg>
);
export default SvgHorizontalAlignLeft;
