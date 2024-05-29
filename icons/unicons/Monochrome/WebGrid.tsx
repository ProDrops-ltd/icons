import * as React from "react";
import type { SVGProps } from "react";
const SvgWebGrid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="#C1C0FF" d="M2 13h12v9h2V2h-2v9H2z" />
    <path fill="#6563FF" d="M21 22h-5V2h5a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1" />
    <path
      fill="#A2A1FF"
      d="M14 22H3a1 1 0 0 1-1-1v-8h12zm0-11H2V3a1 1 0 0 1 1-1h11z"
    />
  </svg>
);
export default SvgWebGrid;
