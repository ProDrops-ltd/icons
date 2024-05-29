import * as React from "react";
import type { SVGProps } from "react";
const SvgDropbox = (props: SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      d="M16.53 10.091 21 12.939l-4.502 2.868L12 12.941l-4.498 2.866L3 12.939l4.47-2.848L3 7.243l4.502-2.868L12 7.241l4.498-2.866L21 7.243z"
      clipRule="evenodd"
    />
    <path
      fill="#C1C0FF"
      fillRule="evenodd"
      d="M16.467 10.091 12 7.245l-4.467 2.846L12 12.936z"
      clipRule="evenodd"
    />
    <path
      fill="#A2A1FF"
      fillRule="evenodd"
      d="m7.53 16.757-.028-.95L12 12.941l4.498 2.866.036.95-4.502 2.868z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgDropbox;
