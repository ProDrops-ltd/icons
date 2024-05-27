import * as React from "react";
import type { SVGProps } from "react";
const SvgCardiogram = (props: SVGProps<SVGSVGElement>) => (
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
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10 8.25a.75.75 0 0 1 .624.334L14 13.648l1.376-2.064A.75.75 0 0 1 16 11.25h5a.75.75 0 0 1 0 1.5h-4.599l-1.777 2.666a.75.75 0 0 1-1.248 0L10 10.352l-1.376 2.064A.75.75 0 0 1 8 12.75H3a.75.75 0 0 1 0-1.5h4.599l1.777-2.666A.75.75 0 0 1 10 8.25"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCardiogram;
