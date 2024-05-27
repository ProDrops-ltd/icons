import * as React from "react";
import type { SVGProps } from "react";
const SvgReloadCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.786 6 .795 2.002A5.25 5.25 0 0 0 12 7.333c-2.761 0-5 2.09-5 4.667q.002.624.167 1.2m3.047 4.8-.795-2.002a5.25 5.25 0 0 0 2.581.669c2.761 0 5-2.09 5-4.667q-.002-.624-.167-1.2"
    />
    <circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5} />
  </svg>
);
export default SvgReloadCircle;
