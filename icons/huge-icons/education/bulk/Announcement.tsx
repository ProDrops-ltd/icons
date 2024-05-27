import * as React from "react";
import type { SVGProps } from "react";
const SvgAnnouncement = (props: SVGProps<SVGSVGElement>) => (
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
      d="m10.719 16.589 2.972 4.653a1.493 1.493 0 1 0 2.512-1.616l-2.427-3.748z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M12.513 3.984a2 2 0 0 1 3.197.361l4.293 7.434a2 2 0 0 1-1.286 2.95L7.8 17.268l-3-5.196z"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="m7.848 16.727-2.5-4.33a1.5 1.5 0 1 0-2.598 1.5l2.5 4.33a1.5 1.5 0 1 0 2.598-1.5"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M20.015 2.74a.75.75 0 0 1 .53.918l-.366 1.366a.75.75 0 0 1-1.449-.388l.366-1.366a.75.75 0 0 1 .919-.53M20.73 8.1a.75.75 0 0 1 .919-.53l1.366.366a.75.75 0 0 1-.389 1.449l-1.366-.367a.75.75 0 0 1-.53-.918"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgAnnouncement;
