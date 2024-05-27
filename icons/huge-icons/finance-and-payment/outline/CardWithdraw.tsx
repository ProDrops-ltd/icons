import * as React from "react";
import type { SVGProps } from "react";
const SvgCardWithdraw = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 12a2 2 0 0 1 2-2h9a2 2 0 1 1 0 4H6a2 2 0 0 1-2-2Z"
    />
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M12 18a4 4 0 1 0 3.413-3.957M12 18a4 4 0 0 1 3.413-3.957M12 18H6a2 2 0 1 1 0-4h9q.213 0 .413.043"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m14 5.414-1.293 1.293a1 1 0 0 1-1.414 0L10 5.414M12 2v4.414"
    />
  </svg>
);
export default SvgCardWithdraw;
