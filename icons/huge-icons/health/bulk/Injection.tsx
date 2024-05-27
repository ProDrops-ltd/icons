import * as React from "react";
import type { SVGProps } from "react";
const SvgInjection = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.371 14.917a.75.75 0 0 1-.024 1.06l-5.83 5.566a.75.75 0 0 1-1.035-1.085l5.829-5.565a.75.75 0 0 1 1.06.024"
      clipRule="evenodd"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M17.905 2.47a.75.75 0 0 1 1.06 0l1.401 1.4.014.014.013.014 1.4 1.4a.75.75 0 1 1-1.06 1.06l-.884-.883-2.297 2.298a.75.75 0 0 1-1.061-1.06l2.298-2.299-.884-.884a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M13.485 6.535 8.3 11.721a2 2 0 0 0-.566 1.131l-.236 1.65a2 2 0 0 0 2.263 2.263l1.65-.236a2 2 0 0 0 1.131-.566l5.186-5.185a2 2 0 0 0 0-2.828l-1.414-1.415a2 2 0 0 0-2.829 0"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="m9.761 16.765 1.65-.236a2 2 0 0 0 1.131-.565l3.772-3.771-7.071-1.415-.943.943a2 2 0 0 0-.566 1.131l-.236 1.65a2 2 0 0 0 2.263 2.263"
    />
  </svg>
);
export default SvgInjection;
