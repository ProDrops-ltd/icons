import * as React from "react";
import type { SVGProps } from "react";
const SvgReloadRectangle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4m8.483 3.723a.75.75 0 0 0-1.394.554l.173.437A6 6 0 0 0 12 6.584C8.874 6.583 6.25 8.96 6.25 12c0 .485.068.956.195 1.405a.75.75 0 0 0 1.443-.41A3.6 3.6 0 0 1 7.75 12c0-2.115 1.853-3.917 4.25-3.917.814 0 1.57.21 2.213.572a.75.75 0 0 0 1.065-.93zm3.072 4.872a.75.75 0 0 0-1.443.41q.136.476.138.995c0 2.115-1.853 3.917-4.25 3.917-.814 0-1.57-.21-2.212-.573a.75.75 0 0 0-1.066.93l.795 2.003a.75.75 0 1 0 1.394-.554l-.173-.437q.61.129 1.262.13c3.126 0 5.75-2.377 5.75-5.416 0-.485-.068-.956-.195-1.405"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgReloadRectangle;
