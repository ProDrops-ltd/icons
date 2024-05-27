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
      fillRule="evenodd"
      d="M22 12c0 5.523-4.477 10-10 10a10 10 0 0 1-4.27-.955l-4.356.726a1 1 0 0 1-1.151-1.146l.713-4.396A10 10 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10m-6 2.675v.436c0 .491-.398.889-.889.889A7.11 7.11 0 0 1 8 8.889C8 8.398 8.398 8 8.889 8h.436c.542 0 1.03.33 1.23.833l.187.466a1.08 1.08 0 0 1-.52 1.368s.222 1.11 1.111 2c.89.889 2 1.11 2 1.11a1.08 1.08 0 0 1 1.367-.519l.467.187c.503.2.833.688.833 1.23"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgWhatsapp;
