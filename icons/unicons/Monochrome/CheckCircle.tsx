import * as React from "react";
import type { SVGProps } from "react";
const SvgCheckCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.313 16.094a1 1 0 0 1-.708-.293L6.793 12.99a1 1 0 0 1 1.414-1.415l2.105 2.106 5.481-5.48a1 1 0 0 1 1.414 1.414L11.02 15.8a1 1 0 0 1-.707.293"
      opacity={0.99}
    />
    <path
      fill="#A2A1FF"
      d="M12 2a10 10 0 1 0 10 10A10.01 10.01 0 0 0 12 2m5.207 7.613-6.187 6.188a1 1 0 0 1-1.415 0l-2.812-2.813a1 1 0 0 1 1.414-1.414l2.105 2.106 5.481-5.48a1 1 0 0 1 1.414 1.413"
    />
  </svg>
);
export default SvgCheckCircle;
