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
      stroke="currentColor"
      strokeWidth={1.5}
      d="M9 20V10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10m-6 0a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2m-6 0v-6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2Zm6 0v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2Z"
    />
    <path
      fill="currentColor"
      d="M11.525 1.964a.5.5 0 0 1 .95 0l.157.482a.5.5 0 0 0 .476.346h.508a.5.5 0 0 1 .293.904l-.41.299a.5.5 0 0 0-.182.559l.157.482a.5.5 0 0 1-.77.56l-.41-.299a.5.5 0 0 0-.588 0l-.41.298a.5.5 0 0 1-.77-.559l.157-.482a.5.5 0 0 0-.182-.56l-.41-.298a.5.5 0 0 1 .293-.904h.508a.5.5 0 0 0 .476-.346z"
    />
  </svg>
);
export default SvgRank;
