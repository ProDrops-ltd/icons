import * as React from "react";
import type { SVGProps } from "react";
const SvgHelp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={12} cy={12} r={10} fill="currentColor" opacity={0.4} />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 7.75c-.69 0-1.25.56-1.25 1.25a.75.75 0 0 1-1.5 0 2.75 2.75 0 1 1 5.064 1.487 9 9 0 0 1-.562.757l-.1.124a14 14 0 0 0-.428.548c-.324.444-.474.779-.474 1.084v.5a.75.75 0 0 1-1.5 0V13c0-.8.392-1.46.761-1.967.156-.214.326-.425.482-.617l.09-.113c.186-.23.344-.432.47-.628A1.25 1.25 0 0 0 12 7.75M12 15.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgHelp;
