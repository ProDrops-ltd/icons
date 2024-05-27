import * as React from "react";
import type { SVGProps } from "react";
const SvgInteractive = (props: SVGProps<SVGSVGElement>) => (
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
      d="m14.67 21.261-2.613-7.837a1.08 1.08 0 0 1 1.367-1.367l7.837 2.613c.985.328.985 1.721 0 2.05l-2.894.964a1.08 1.08 0 0 0-.683.683l-.965 2.894c-.328.985-1.72.985-2.05 0"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 7.75a4.25 4.25 0 0 0-1.59 8.193.75.75 0 1 1-.563 1.39A5.752 5.752 0 0 1 12 6.25a5.75 5.75 0 0 1 5.333 3.597.75.75 0 1 1-1.39.562A4.25 4.25 0 0 0 12 7.75"
      clipRule="evenodd"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 2.75a9.25 9.25 0 0 0-.078 18.5.75.75 0 1 1-.013 1.5C6.014 22.7 1.25 17.907 1.25 12 1.25 6.063 6.063 1.25 12 1.25c5.907 0 10.7 4.764 10.75 10.66a.75.75 0 1 1-1.5.012A9.25 9.25 0 0 0 12 2.75"
      clipRule="evenodd"
      opacity={0.4}
    />
  </svg>
);
export default SvgInteractive;
