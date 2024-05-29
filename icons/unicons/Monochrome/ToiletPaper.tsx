import * as React from "react";
import type { SVGProps } from "react";
const SvgToiletPaper = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#6563FF"
      d="M7 9.243c.552 0 1-.56 1-1.25s-.448-1.25-1-1.25-1 .56-1 1.25.448 1.25 1 1.25"
    />
    <path
      fill="#A2A1FF"
      d="M7 2C4.243 2 2 4.691 2 8s2.243 6 5 6 5-2.691 5-6-2.243-6-5-6m0 7.243a1.146 1.146 0 0 1-1-1.25 1.146 1.146 0 0 1 1-1.25 1.146 1.146 0 0 1 1 1.25 1.146 1.146 0 0 1-1 1.25"
    />
    <path
      fill="#C1C0FF"
      d="M22.76 20.35A7.5 7.5 0 0 1 21 15.459V8c0-3.309-2.243-6-5-6H7c2.757 0 5 2.691 5 6v7.459a9.5 9.5 0 0 0 2.24 6.191A1 1 0 0 0 15 22h7a1 1 0 0 0 .76-1.65"
    />
    <path fill="#6563FF" d="M12 8c0 3.309-2.243 6-5 6h5z" />
  </svg>
);
export default SvgToiletPaper;
