import * as React from "react";
import type { SVGProps } from "react";
const SvgRecordAudio = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="#A2A1FF" d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12" />
    <path
      fill="#6563FF"
      d="M12 2a10 10 0 1 0 10 10A10.01 10.01 0 0 0 12 2m0 16a6 6 0 1 1 6-6 6.006 6.006 0 0 1-6 6"
    />
  </svg>
);
export default SvgRecordAudio;
