import * as React from "react";
import type { SVGProps } from "react";
const SvgLoading = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={12} cy={4} r={2} fill="currentColor" opacity={0.4} />
    <circle cx={12} cy={20} r={2} fill="currentColor" opacity={0.4} />
    <circle
      cx={18.928}
      cy={8}
      r={2}
      fill="currentColor"
      transform="rotate(60 18.928 8)"
    />
    <circle
      cx={5.072}
      cy={16}
      r={2}
      fill="currentColor"
      opacity={0.4}
      transform="rotate(60 5.072 16)"
    />
    <circle
      cx={18.928}
      cy={16}
      r={2}
      fill="currentColor"
      opacity={0.4}
      transform="rotate(120 18.928 16)"
    />
    <circle
      cx={5.072}
      cy={8}
      r={2}
      fill="currentColor"
      opacity={0.4}
      transform="rotate(120 5.072 8)"
    />
  </svg>
);
export default SvgLoading;
