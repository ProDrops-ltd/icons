import * as React from "react";
import type { SVGProps } from "react";
const SvgDirectionUp = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.414 17.469a.75.75 0 0 0 1.055.117L12 13.96l4.532 3.626a.75.75 0 1 0 .936-1.172l-5-4a.75.75 0 0 0-.937 0l-5 4a.75.75 0 0 0-.117 1.054"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M6.414 11.469a.75.75 0 0 0 1.055.117L12 7.96l4.532 3.626a.75.75 0 1 0 .936-1.172l-5-4a.75.75 0 0 0-.937 0l-5 4a.75.75 0 0 0-.117 1.055"
      clipRule="evenodd"
      opacity={0.4}
    />
  </svg>
);
export default SvgDirectionUp;
