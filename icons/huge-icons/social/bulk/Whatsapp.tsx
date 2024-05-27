import * as React from "react";
import type { SVGProps } from "react";
const SvgWhatsapp = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.511.335 2.945.936 4.229l-.713 4.396a1 1 0 0 0 1.152 1.146l4.355-.726A10 10 0 0 0 12 22"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M16 15.111v-.436c0-.542-.33-1.03-.833-1.23l-.466-.187a1.08 1.08 0 0 0-1.14.215c-.165.154-.38.273-.594.199a4.36 4.36 0 0 1-1.634-1.005 4.36 4.36 0 0 1-1.005-1.634c-.074-.213.045-.429.199-.593.28-.298.375-.74.215-1.14l-.187-.467A1.325 1.325 0 0 0 9.325 8H8.89A.89.89 0 0 0 8 8.889 7.11 7.11 0 0 0 15.111 16c.491 0 .889-.398.889-.889"
    />
  </svg>
);
export default SvgWhatsapp;
