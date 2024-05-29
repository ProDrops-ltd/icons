import * as React from "react";
import type { SVGProps } from "react";
const SvgStar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#6563FF"
      d="M17.562 21.56c-.162 0-.321-.04-.465-.115L12 18.765l-5.097 2.68a1 1 0 0 1-1.451-1.054l.973-5.676-4.123-4.019a1 1 0 0 1 .554-1.706l5.699-.828 2.548-5.164a1.042 1.042 0 0 1 1.794 0l2.548 5.164 5.699.828a1 1 0 0 1 .554 1.706l-4.123 4.019.973 5.676a1 1 0 0 1-.986 1.169"
    />
  </svg>
);
export default SvgStar;
