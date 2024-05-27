import * as React from "react";
import type { SVGProps } from "react";
const SvgFilePng = (props: SVGProps<SVGSVGElement>) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13 2v4a4 4 0 0 0 4 4h4M3 6v12a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-6.343a4 4 0 0 0-1.172-2.829l-5.656-5.656A4 4 0 0 0 11.343 2H7a4 4 0 0 0-4 4Z"
    />
    <path
      fill="currentColor"
      d="M6 18v-4.295h1.392q.79 0 1.03.065.37.097.619.421t.249.835q0 .396-.144.665-.143.27-.366.425a1.3 1.3 0 0 1-.448.202 5 5 0 0 1-.9.062h-.565V18zm.867-3.568v1.218h.475q.513 0 .685-.067a.571.571 0 0 0 .37-.545.56.56 0 0 0-.138-.387.6.6 0 0 0-.349-.19 4 4 0 0 0-.624-.03zM10.01 18v-4.295h.845l1.757 2.868v-2.868h.806V18h-.87l-1.732-2.8V18zM16.336 16.42v-.723h1.87v1.711q-.274.264-.792.466-.515.2-1.046.2-.674 0-1.175-.282a1.8 1.8 0 0 1-.753-.809 2.6 2.6 0 0 1-.252-1.145q0-.671.282-1.192.281-.522.823-.8.413-.214 1.028-.214.801 0 1.248.337.452.333.58.926l-.86.16a.9.9 0 0 0-.344-.497 1.02 1.02 0 0 0-.624-.185q-.568 0-.905.36-.334.36-.334 1.07 0 .765.34 1.148.34.381.89.381a1.5 1.5 0 0 0 .545-.105 2 2 0 0 0 .472-.261v-.545z"
    />
  </svg>
);
export default SvgFilePng;
