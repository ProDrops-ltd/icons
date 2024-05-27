import * as React from "react";
import type { SVGProps } from "react";
const SvgFavourite = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.765 4.702 12 5.524l-.765-.822c-2.113-2.27-5.538-2.27-7.65 0s-2.113 5.95 0 8.22l6.885 7.397a2.06 2.06 0 0 0 3.06 0l6.886-7.397c2.112-2.27 2.112-5.95 0-8.22s-5.538-2.27-7.651 0"
      opacity={0.4}
    />
  </svg>
);
export default SvgFavourite;
