import * as React from "react";
import type { SVGProps } from "react";
const SvgTurn = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.973 3.254a4.28 4.28 0 0 1 6.054 0l5.72 5.719a4.28 4.28 0 0 1 0 6.054l-5.72 5.72a4.28 4.28 0 0 1-6.054 0l-5.72-5.72a4.28 4.28 0 0 1 0-6.054z"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m12.75 7.396.72.72a.75.75 0 1 0 1.06-1.06l-1.293-1.293a1.75 1.75 0 0 0-2.474 0L9.47 7.055a.75.75 0 0 0 1.06 1.061l.72-.72v5.14A4.73 4.73 0 0 0 8 11.25h-.604l.72-.72a.75.75 0 1 0-1.06-1.06l-1.293 1.293a1.75 1.75 0 0 0 0 2.474l1.292 1.293a.75.75 0 0 0 1.061-1.06l-.72-.72H8A3.25 3.25 0 0 1 11.25 16v1a.75.75 0 0 0 1.5 0v-1A3.25 3.25 0 0 1 16 12.75h.604l-.72.72a.75.75 0 1 0 1.06 1.06l1.293-1.293a1.75 1.75 0 0 0 0-2.474L16.945 9.47a.75.75 0 1 0-1.061 1.06l.72.72H16c-1.257 0-2.4.488-3.25 1.286z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTurn;
