import * as React from "react";
import type { SVGProps } from "react";
const SvgFilePdf = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 18V6a4 4 0 0 1 4-4h4.343a4 4 0 0 1 .907.104V6A4.75 4.75 0 0 0 17 10.75h3.896q.104.444.104.907V18a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4M13.75 6V2.805q.222.168.422.367l5.656 5.656q.2.2.367.422H17A3.25 3.25 0 0 1 13.75 6M6.437 18v-4.295h1.391q.79 0 1.031.065.37.097.619.421t.249.835q0 .396-.144.665-.144.27-.366.425a1.3 1.3 0 0 1-.448.202 5 5 0 0 1-.9.062h-.565V18zm.867-3.568v1.218h.474q.512 0 .686-.067a.571.571 0 0 0 .37-.545.56.56 0 0 0-.139-.387.6.6 0 0 0-.348-.19 4 4 0 0 0-.624-.03zm3.131-.727h1.585q.537 0 .818.082.378.111.647.396.27.285.41.697.141.41.141 1.014 0 .53-.132.914-.16.468-.46.758-.225.22-.609.343-.287.09-.768.091h-1.632zm.868.727v2.844h.647q.363 0 .525-.04a.8.8 0 0 0 .348-.18q.14-.125.229-.412.087-.29.088-.788 0-.499-.088-.765a1 1 0 0 0-.246-.416.83.83 0 0 0-.402-.202q-.18-.041-.712-.041zm3.477-.727V18h.868v-1.825h1.792v-.727h-1.793v-1.016h2.078v-.727z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFilePdf;