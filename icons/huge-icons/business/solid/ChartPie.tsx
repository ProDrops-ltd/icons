import * as React from "react";
import type { SVGProps } from "react";
const SvgChartPie = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.34 7.622a5 5 0 0 0-1.59-.53V2.029a10 10 0 0 1 9.222 9.222h-5.065a4.96 4.96 0 0 0-2.567-3.628M6.444 3.685a10 10 0 0 1 4.806-1.657v5.065A4.964 4.964 0 0 0 8 14.94l-3.581 3.58A10 10 0 0 1 6.444 3.686M5.48 19.581a10 10 0 0 0 12.83.178L13.8 16.626A4.97 4.97 0 0 1 9.061 16zM16.587 13.9c.153-.37.26-.757.32-1.15h5.065a10 10 0 0 1-2.553 5.955l-4.203-2.923c.599-.51 1.07-1.155 1.37-1.882"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgChartPie;
