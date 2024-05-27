import * as React from "react";
import type { SVGProps } from "react";
const SvgPinterest = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={12} cy={12} r={10} fill="currentColor" opacity={0.4} />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 7.75a4.25 4.25 0 0 0-3.682 6.374.75.75 0 1 1-1.298.752 5.75 5.75 0 1 1 3.652 2.72L9.594 21.69a.75.75 0 0 1-1.45-.382l2.63-10a.75.75 0 0 1 1.451.382l-1.171 4.453q.456.106.946.106a4.25 4.25 0 0 0 0-8.5"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPinterest;
