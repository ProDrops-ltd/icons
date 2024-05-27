import * as React from "react";
import type { SVGProps } from "react";
const SvgClouds = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17.419 12.819q.484.38.874.859C20.454 12.916 22 10.885 22 8.5 22 5.462 19.493 3 16.4 3c-2.311 0-4.296 1.375-5.15 3.338A4 4 0 0 0 10 6.143 4 4 0 0 0 6.28 8.62 7.2 7.2 0 0 1 7.6 8.5a7.12 7.12 0 0 1 5.938 3.162q.23-.02.462-.02c1.288 0 2.478.44 3.419 1.177M7.6 21C4.507 21 2 18.538 2 15.5c0-2.493 1.688-4.598 4.003-5.273A5.7 5.7 0 0 1 7.6 10c2.311 0 4.296 1.375 5.15 3.338a4 4 0 0 1 1.25-.195c.943 0 1.81.32 2.493.856A3.9 3.9 0 0 1 18 17.071C18 19.241 16.21 21 14 21z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgClouds;
