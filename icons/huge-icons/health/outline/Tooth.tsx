import * as React from "react";
import type { SVGProps } from "react";
const SvgTooth = (props: SVGProps<SVGSVGElement>) => (
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8 6.91c1.972 0 3.07-.707 3.945-1.495 1.972-1.776 5.252-4.07 8.318-1.176 4.995 4.714-2.113 16.623-4.683 16.623-2.554 0-.7-7.295-3.58-7.387"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 5.366c-1.978-1.77-5.226-3.994-8.263-1.127C-1.258 8.953 5.85 20.862 8.42 20.862c2.554 0 .7-7.296 3.58-7.387"
    />
  </svg>
);
export default SvgTooth;
