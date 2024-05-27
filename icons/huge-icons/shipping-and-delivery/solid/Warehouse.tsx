import * as React from "react";
import type { SVGProps } from "react";
const SvgWarehouse = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.706 6.806A4 4 0 0 0 2 10.082V20a2 2 0 0 0 2 2h1.25v-9A2.75 2.75 0 0 1 8 10.25h8A2.75 2.75 0 0 1 18.75 13v9H20a2 2 0 0 0 2-2v-9.918a4 4 0 0 0-1.706-3.276l-6-4.2a4 4 0 0 0-4.588 0zM17.25 22v-2.25H6.75V22zm-10.5-3.75v-2.5h10.5v2.5zm0-4h10.5V13c0-.69-.56-1.25-1.25-1.25H8c-.69 0-1.25.56-1.25 1.25z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgWarehouse;
