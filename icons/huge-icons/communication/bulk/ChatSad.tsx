import * as React from "react";
import type { SVGProps } from "react";
const SvgChatSad = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13 3h-2a9 9 0 0 0-9 9v5a4 4 0 0 0 4 4h7a9 9 0 1 0 0-18"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m8.6 16.45-.002.002A.75.75 0 0 1 7.4 15.55v-.001l.002-.001.002-.003.006-.008.02-.025.065-.08a6.695 6.695 0 0 1 1.127-1.039c.77-.56 1.921-1.143 3.378-1.143s2.608.583 3.379 1.143a6.7 6.7 0 0 1 1.126 1.039l.066.08.019.025.006.008.002.003.001.001.001.001a.75.75 0 0 1-1.198.902m0 0-.007-.009-.039-.047a5.199 5.199 0 0 0-.86-.79c-.604-.44-1.453-.856-2.496-.856s-1.892.417-2.496.857a5.2 5.2 0 0 0-.86.79l-.038.046-.008.01.002-.003m6.802.002-.001-.001-.006-.008.006.008z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgChatSad;
