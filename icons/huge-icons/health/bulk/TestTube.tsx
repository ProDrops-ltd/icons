import * as React from "react";
import type { SVGProps } from "react";
const SvgTestTube = (props: SVGProps<SVGSVGElement>) => (
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
      d="m12.889 6.142 4.97 4.97-9.112 9.11a3.514 3.514 0 1 1-4.97-4.97zM17.03 3.657a2.343 2.343 0 1 1 3.313 3.313l-.828.828-3.313-3.313z"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M12.474 3.242a1.757 1.757 0 0 1 2.485 0l5.798 5.798a1.757 1.757 0 0 1-2.485 2.485l-5.798-5.798a1.757 1.757 0 0 1 0-2.485M3.778 15.253a3.514 3.514 0 1 0 4.97 4.97l6.225-6.226-8.946-.994z"
    />
  </svg>
);
export default SvgTestTube;
