import * as React from "react";
import type { SVGProps } from "react";
const SvgVideoFavourite = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="m8.663 2-3 6h1.674l3-6h6.326l-3 6h1.674l2.993-5.987A4 4 0 0 1 22 6v2H2V6a4 4 0 0 1 4-4zM12.268 12.6l-.268.289-.268-.29c-.74-.799-1.938-.799-2.677 0-.74.8-.74 2.096 0 2.895l1.874 2.026c.591.64 1.55.64 2.142 0l1.874-2.026c.74-.8.74-2.095 0-2.894-.739-.8-1.938-.8-2.677 0"
    />
  </svg>
);
export default SvgVideoFavourite;
