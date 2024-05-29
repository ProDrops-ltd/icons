import * as React from "react";
import type { SVGProps } from "react";
const SvgLayerGroup = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#C1C0FF"
      d="M12 14.195c-.175 0-.348-.046-.5-.134l-9-5.197a1 1 0 0 1 0-1.733l9-5.193c.31-.178.69-.178 1 0l9 5.193a1 1 0 0 1 0 1.733l-9 5.197a1 1 0 0 1-.5.134"
    />
    <path
      fill="#A2A1FF"
      d="m21.5 11.131-1.964-1.133-7.036 4.063c-.31.178-.69.178-1 0L4.464 9.998 2.5 11.131a1 1 0 0 0 0 1.733l9 5.197c.31.178.69.178 1 0l9-5.197a1 1 0 0 0 0-1.733"
    />
    <path
      fill="#6563FF"
      d="m21.5 15.131-1.964-1.133-7.036 4.063c-.31.178-.69.178-1 0l-7.036-4.063L2.5 15.131a1 1 0 0 0 0 1.733l9 5.197c.31.178.69.178 1 0l9-5.197a1 1 0 0 0 0-1.733"
    />
  </svg>
);
export default SvgLayerGroup;
