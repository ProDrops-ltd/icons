import * as React from "react";
import type { SVGProps } from "react";
const SvgMailSilent = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.47 1.47a.75.75 0 0 1 1.06 0l20 20a.75.75 0 1 1-1.06 1.06l-1.865-1.865A4 4 0 0 1 18 21H6a4 4 0 0 1-4-4V7c0-1.09.435-2.077 1.141-2.798L1.47 2.53a.75.75 0 0 1 0-1.06M22 17V7a4 4 0 0 0-4-4H7l6.86 6.86 3.724-2.484a.75.75 0 1 1 .832 1.248l-3.475 2.317 6.958 6.958q.1-.435.101-.899"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMailSilent;
