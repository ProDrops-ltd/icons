import * as React from "react";
import type { SVGProps } from "react";
const SvgSpellcheck = (props: SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      d="M9 3.25a.75.75 0 0 1 .692.462l5 12a.75.75 0 0 1-1.384.576l-1.475-3.538H6.167l-1.475 3.538a.75.75 0 0 1-1.384-.577l5-12A.75.75 0 0 1 9 3.25m-2.208 8h4.416L9 5.95z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M20.515 13.455a.75.75 0 0 1 .03 1.06l-4.996 5.29a1.75 1.75 0 0 1-2.443.1l-2.608-2.347a.75.75 0 1 1 1.004-1.116l2.607 2.347c.101.091.256.085.35-.014l4.996-5.29a.75.75 0 0 1 1.06-.03"
      clipRule="evenodd"
      opacity={0.4}
    />
  </svg>
);
export default SvgSpellcheck;
