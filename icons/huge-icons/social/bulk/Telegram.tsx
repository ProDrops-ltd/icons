import * as React from "react";
import type { SVGProps } from "react";
const SvgTelegram = (props: SVGProps<SVGSVGElement>) => (
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
      d="m2.896 10.796 15.39-6.65a1 1 0 0 1 1.383 1.074l-2.104 13.276a1 1 0 0 1-1.714.53l-3.453-3.657a2 2 0 0 1-.125-2.6L14.71 9.63c.14-.18-.081-.416-.27-.289l-4.847 3.252a4 4 0 0 1-2.8.637l-3.644-.527c-.998-.144-1.18-1.508-.254-1.908"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m19.411 4.379-4.762 4.953a.19.19 0 0 0-.208.01l-4.847 3.252a4 4 0 0 1-2.8.637l-3.644-.527c-.998-.144-1.18-1.508-.254-1.908l15.39-6.65a.99.99 0 0 1 1.125.233"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTelegram;
