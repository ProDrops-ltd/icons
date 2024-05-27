import * as React from "react";
import type { SVGProps } from "react";
const SvgTransfer = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.75 2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm10 12a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zm6.604-7.25-.72.72a.75.75 0 0 0 1.06 1.06l1.293-1.293a1.75 1.75 0 0 0 0-2.474L20.695 3.47a.75.75 0 1 0-1.061 1.06l.72.72H15.75a.75.75 0 0 0 0 1.5zM3.866 19.47l-.72-.72H7.75a.75.75 0 0 0 0-1.5H3.146l.72-.72a.75.75 0 1 0-1.06-1.06l-1.293 1.293a1.75 1.75 0 0 0 0 2.474l1.292 1.293a.75.75 0 0 0 1.061-1.06"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTransfer;
