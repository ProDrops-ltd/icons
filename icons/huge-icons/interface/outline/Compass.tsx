import * as React from "react";
import type { SVGProps } from "react";
const SvgCompass = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M22 12c0 5.523-4.477 10-10 10m10-10c0-5.523-4.477-10-10-10m10 10h-2m-8 10C6.477 22 2 17.523 2 12m10 10v-2M2 12C2 6.477 6.477 2 12 2M2 12h2m8-10v2m2.861 4.046-6.27 2.09c-.788.263-.788 1.377 0 1.64l2.315.771c.258.086.46.289.547.547l.772 2.315c.262.788 1.377.788 1.64 0l2.09-6.27a.864.864 0 0 0-1.094-1.093"
    />
  </svg>
);
export default SvgCompass;
