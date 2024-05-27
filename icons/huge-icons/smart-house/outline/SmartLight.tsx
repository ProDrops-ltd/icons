import * as React from "react";
import type { SVGProps } from "react";
const SvgSmartLight = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.243 3.757A5.98 5.98 0 0 0 12 2a5.98 5.98 0 0 0-4.243 1.757M9.88 5.88A3 3 0 0 1 12 5a3 3 0 0 1 2.121.879M12.001 16v6m0 0h3m-3 0H9m-1.602-6h9.202c1.525 0 2.489-1.638 1.748-2.971l-2.222-4A2 2 0 0 0 14.38 8H9.62a2 2 0 0 0-1.748 1.029l-2.222 4C4.91 14.362 5.874 16 7.399 16"
    />
  </svg>
);
export default SvgSmartLight;
