import * as React from "react";
import type { SVGProps } from "react";
const SvgBookmark = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 19.492V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v15.491c0 1.25-1.438 1.952-2.423 1.183l-4.347-3.957a2 2 0 0 0-2.46 0l-4.347 3.957C5.438 21.443 4 20.741 4 19.491"
      opacity={0.4}
    />
    <path fill="currentColor" d="M6 2h12a2 2 0 0 1 2 2v3H4V4a2 2 0 0 1 2-2" />
  </svg>
);
export default SvgBookmark;
