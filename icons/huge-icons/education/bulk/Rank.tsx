import * as React from "react";
import type { SVGProps } from "react";
const SvgRank = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9 9.5A1.5 1.5 0 0 1 10.5 8h3A1.5 1.5 0 0 1 15 9.5v11a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 20.5z"
    />
    <path
      fill="currentColor"
      d="M15 15.5a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5v5a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5zM3 13.5A1.5 1.5 0 0 1 4.5 12h3A1.5 1.5 0 0 1 9 13.5v7A1.5 1.5 0 0 1 7.5 22h-3A1.5 1.5 0 0 1 3 20.5z"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M11.525 1.964a.5.5 0 0 1 .95 0l.157.482a.5.5 0 0 0 .476.346h.508a.5.5 0 0 1 .293.904l-.41.299a.5.5 0 0 0-.182.559l.157.483a.5.5 0 0 1-.77.559l-.41-.299a.5.5 0 0 0-.588 0l-.41.299a.5.5 0 0 1-.77-.56l.157-.482a.5.5 0 0 0-.182-.56l-.41-.298a.5.5 0 0 1 .293-.904h.508a.5.5 0 0 0 .476-.346z"
    />
  </svg>
);
export default SvgRank;
