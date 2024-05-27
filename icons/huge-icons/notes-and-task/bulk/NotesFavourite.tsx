import * as React from "react";
import type { SVGProps } from "react";
const SvgNotesFavourite = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 1.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75M8 1.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2A.75.75 0 0 1 8 1.25"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M3 7.5a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4V18a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4z"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M12.265 10.674 12 10.94l-.265-.265a1.875 1.875 0 0 0-2.652 2.652l1.856 1.856a1.5 1.5 0 0 0 2.122 0l1.856-1.856a1.875 1.875 0 1 0-2.652-2.652"
    />
  </svg>
);
export default SvgNotesFavourite;
