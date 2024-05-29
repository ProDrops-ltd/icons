import * as React from "react";
import type { SVGProps } from "react";
const SvgMap = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#000"
      d="m21.32 5.05-6-2h-.07a.7.7 0 0 0-.14 0h-.43L9 5 3.32 3.05a1 1 0 0 0-.9.14A1 1 0 0 0 2 4v14a1 1 0 0 0 .68.95l6 2a1 1 0 0 0 .62 0l5.7-1.9L20.68 21q.16.023.32 0a.94.94 0 0 0 .58-.19A1 1 0 0 0 22 20V6a1 1 0 0 0-.68-.95M8 18.61l-4-1.33V5.39l4 1.33zm6-1.33-4 1.33V6.72l4-1.33zm6 1.33-4-1.33V5.39l4 1.33z"
    />
  </svg>
);
export default SvgMap;
