import * as React from "react";
import type { SVGProps } from "react";
const SvgTag1 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.576 3.5A4.08 4.08 0 0 0 9.41 4.69l-6.565 6.565c-1.583 1.583-1.6 4.133-.038 5.695l4.242 4.242c1.562 1.563 4.112 1.545 5.696-.038l6.565-6.565a4.08 4.08 0 0 0 1.189-3.165l-.278-3.964a3.96 3.96 0 0 0-3.682-3.682zm.838 7.086a2 2 0 1 0 2.829-2.828 2 2 0 0 0-2.829 2.828"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTag1;
