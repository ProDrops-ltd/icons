import * as React from "react";
import type { SVGProps } from "react";
const SvgLibrary = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 14S7 9.761 7 7q0-.311.037-.613c-.789-.18-1.556-.3-2.242-.377C3.807 5.9 3 6.715 3 7.72v10.013c0 1.006.807 1.821 1.795 1.931 1.996.223 4.679.822 6.59 2.145a1.08 1.08 0 0 0 1.23 0c1.911-1.323 4.594-1.922 6.59-2.145.988-.11 1.795-.925 1.795-1.93V7.72c0-1.005-.807-1.82-1.795-1.71a20 20 0 0 0-2.242.377Q17 6.69 17 7c0 2.761-5 7-5 7"
      clipRule="evenodd"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M16.963 6.387Q17 6.69 17 7c0 2.761-5 7-5 7S7 9.761 7 7q0-.311.037-.613a5 5 0 0 1 9.926 0M12 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M11.385 21.81c.184.127.4.19.615.19.216 0 .431-.063.615-.19l.135-.092v-8.394c-.451.423-.75.676-.75.676s-.299-.253-.75-.676v8.394q.068.045.135.092"
    />
  </svg>
);
export default SvgLibrary;
