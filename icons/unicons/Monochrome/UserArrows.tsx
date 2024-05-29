import * as React from "react";
import type { SVGProps } from "react";
const SvgUserArrows = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="#C1C0FF" d="M6 16.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7" />
    <path
      fill="#A2A1FF"
      d="M8.64 15.272a3.45 3.45 0 0 1-5.28 0A4.99 4.99 0 0 0 1 19.5a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1 4.99 4.99 0 0 0-2.36-4.228M18 16.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7"
    />
    <path
      fill="#8382FF"
      d="M20.64 15.272a3.453 3.453 0 0 1-5.28 0A4.99 4.99 0 0 0 13 19.5a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1 4.99 4.99 0 0 0-2.36-4.228"
    />
    <path
      fill="#6563FF"
      d="m17.207 5.793-2-2a1 1 0 0 0-1.414 1.414l.293.293H9.914l.293-.293a1 1 0 0 0-1.414-1.414l-2 2a1 1 0 0 0 0 1.414l2 2a1 1 0 0 0 1.414-1.414L9.914 7.5h4.172l-.293.293a1 1 0 1 0 1.414 1.414l2-2a1 1 0 0 0 0-1.414"
    />
  </svg>
);
export default SvgUserArrows;
