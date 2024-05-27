import * as React from "react";
import type { SVGProps } from "react";
const SvgShield = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.376 2.722 5.378 4.943c-1.446.643-2.4 2.082-2.308 3.66.36 6.175 2.168 8.893 6.866 12.074a3.685 3.685 0 0 0 4.129 0c4.712-3.197 6.456-5.954 6.847-12.052.102-1.59-.854-3.044-2.31-3.69l-4.977-2.213a4 4 0 0 0-3.25 0Z"
    />
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    />
  </svg>
);
export default SvgShield;
