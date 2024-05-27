import * as React from "react";
import type { SVGProps } from "react";
const SvgSolarPanel = (props: SVGProps<SVGSVGElement>) => (
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
      d="m8.754 10 .715-3.25h4.595l.715 3.25zM7.22 10H5.516v6c0 .69.56 1.25 1.25 1.25h.5a.75.75 0 0 1 0 1.5h-.5A2.75 2.75 0 0 1 4.016 16V9.743a2 2 0 0 1-.802-2.637l.178-.356h4.542zM4.142 5.25h4.122L8.979 2H7.003a2 2 0 0 0-1.79 1.106zM10.515 2l-.716 3.25h3.935L13.019 2zm4.04 0 .714 3.25h4.123l-1.073-2.144A2 2 0 0 0 16.53 2zm5.587 4.75h-4.543l.715 3.25h1.703v6c0 .69-.56 1.25-1.25 1.25h-.5a.75.75 0 0 0 0 1.5h.5a2.75 2.75 0 0 0 2.75-2.75V9.743a2 2 0 0 0 .802-2.637zm-6.775 7.7a.75.75 0 0 0-1.2-.9l-3 4a.75.75 0 0 0 .6 1.2h2.5l-2.1 2.8a.75.75 0 1 0 1.2.9l3-4a.75.75 0 0 0-.6-1.2h-2.5z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSolarPanel;
