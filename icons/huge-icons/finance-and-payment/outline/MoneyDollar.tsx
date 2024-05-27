import * as React from "react";
import type { SVGProps } from "react";
const SvgMoneyDollar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <rect
      width={20}
      height={16}
      x={2}
      y={4}
      stroke="currentColor"
      strokeWidth={1.5}
      rx={4}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M14 10a2 2 0 1 0-2 2M12 12a2 2 0 1 1-2 2"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 6.5V8M12 16v1.5"
    />
  </svg>
);
export default SvgMoneyDollar;
